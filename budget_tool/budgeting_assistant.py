def get_user_inputs():
    print("Welcome to the Personal Budget Planner!")
    income = float(input("Enter your monthly income: "))
    age = int(input("Enter your age: "))
    savings_goal = float(input("Enter your total savings goal (e.g., for retirement): "))
    debt = float(input("Enter your total debt: "))
    risk_tolerance = input("Enter your risk tolerance (low, medium, high): ")
    return income, age, savings_goal, debt, risk_tolerance

def calculate_budget(income, savings_goal, debt, risk_tolerance):
    budget = {}
    budget['Essential Expenses'] = income * 0.50  # 50% to essential expenses
    budget['Discretionary Spending'] = income * 0.20  # 20% to discretionary
    
    # Adjust savings rate based on risk tolerance
    if risk_tolerance.lower() == 'high':
        savings_rate = 0.20
    elif risk_tolerance.lower() == 'medium':
        savings_rate = 0.15
    else:
        savings_rate = 0.10
    
    budget['Savings'] = income * savings_rate
    budget['Debt Repayment'] = income * 0.10  # 10% to debt repayment
    remaining = income - sum(budget.values())
    budget['Miscellaneous'] = remaining

    return budget

def display_budget(budget):
    print("\nHere is your monthly budget distribution:")
    for category, amount in budget.items():
        print(f"{category}: ${amount:.2f}")

def main():
    income, age, savings_goal, debt, risk_tolerance = get_user_inputs()
    budget = calculate_budget(income, savings_goal, debt, risk_tolerance)
    display_budget(budget)

if __name__ == "__main__":
    main()
