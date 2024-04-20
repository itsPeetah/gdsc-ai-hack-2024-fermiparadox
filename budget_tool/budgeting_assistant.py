from risk_quiz import Risk  

class BudgetPlanner:
    def __init__(self, income, age, savings_goal, debt, risk_tolerance):
        self.income = income
        self.age = age
        self.savings_goal = savings_goal
        self.debt = debt
        self.risk_tolerance = risk_tolerance
        self.fixed_payments = {}

    def get_user_inputs(self):
        print("Welcome to the Personal Budget Planner!")
        self.income = float(input("Enter your monthly income: "))
        self.age = int(input("Enter your age: "))
        self.savings_goal = float(input("Enter your total savings goal (e.g., for retirement): "))
        self.debt = float(input("Enter your total debt: "))
        self.get_fixed_payments()

    def get_fixed_payments(self):
        while True:
            decision = input("Do you have any fixed payments to enter? (yes/no): ").lower()
            if decision == 'no':
                break
            payment_type = input("Enter the type of the fixed payment (e.g., rent, car loan): ")
            amount = float(input(f"Enter the monthly amount for {payment_type}: "))
            self.fixed_payments[payment_type] = amount

    def calculate_budget(self):
        total_fixed_payments = sum(self.fixed_payments.values())
        budget = {
            'Essential Expenses': self.income * 0.50,
            'Discretionary Spending': self.income * 0.20,
            'Savings': self.income * 0.15,
            'Debt Repayment': self.income * 0.10 if self.debt > 0 else 0,
            'Fixed Payments': total_fixed_payments,
            'Miscellaneous': 0
        }

        if self.risk_tolerance >= 0.67:
            budget['Savings'] += self.income * 0.05
            budget['Discretionary Spending'] += self.income * 0.05
        elif self.risk_tolerance >= 0.34:
            budget['Savings'] += self.income * 0.03
            budget['Discretionary Spending'] += self.income * 0.02

        budget['Miscellaneous'] = self.income - sum(budget.values())

        return budget

    def display_budget(self, budget):
        print("\nHere is your monthly budget distribution:")
        for category, amount in budget.items():
            print(f"{category}: ${amount:.2f}")

def main():
    risk = Risk() 
    risk_tolerance = risk.get_risk_tolerance_coefficient()  


    income = float(input("Enter your monthly income: "))
    age = int(input("Enter your age: "))
    savings_goal = float(input("Enter your total savings goal (e.g., for retirement): "))
    debt = float(input("Enter your total debt: "))


    planner = BudgetPlanner(income, age, savings_goal, debt, risk_tolerance)
    planner.get_fixed_payments()  
    budget = planner.calculate_budget()
    planner.display_budget(budget)

if __name__ == "__main__":
    main()
