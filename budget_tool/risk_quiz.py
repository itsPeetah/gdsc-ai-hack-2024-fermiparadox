class Risk:
    def __init__(self):
        self.weights = {
            'q1': {1: 4, 2: 3, 3: 2, 4: 4},  # Higher weights for retirement and wealth accumulation
            'q2': {1: 1, 2: 2, 3: 3, 4: 4},  # Longer time horizons indicate higher risk tolerance
            'q3': {1: 3, 2: 2, 3: 1},        # Stable financial situation supports higher risk
            'q4': {1: 1, 2: 2, 3: 3, 4: 4},  # More experience correlates with higher risk tolerance
            'q5': {1: 1, 2: 2, 3: 3, 4: 4},  # Willingness to buy more during downturns indicates high risk tolerance
            'q6': {1: 1, 2: 2, 3: 3},        # Less need for liquidity indicates higher risk tolerance
            'q7': {1: 1, 2: 2, 3: 3, 4: 4},  # Comfort with greater losses indicates higher risk tolerance
            'q8': {1: 1, 2: 3, 3: 4},        # Higher savings rates suggest higher risk capacity
            'q9': {1: 1, 2: 2, 3: 3, 4: 4},  # Greater financial knowledge supports higher risk
            'q10': {1: 4, 2: 2, 3: 1}        # Fewer dependents correlate with higher risk tolerance
        }

    def get_risk_tolerance_coefficient(self):
        print("Please answer the following questions by entering the number corresponding to your choice:")
        answers = {
            'q1': input("What are your primary financial goals? Enter the number corresponding to your goal: "
                        "1. Saving for retirement, "
                        "2. Buying a home, "
                        "3. Building an emergency fund, "
                        "4. Accumulating wealth "),
            'q2': input("How long do you plan to keep your investments before you start withdrawing? Enter the number: "
                        "1. Less than 2 years, "
                        "2. 2-5 years, "
                        "3. 5-10 years, "
                        "4. More than 10 years "),
            'q3': input("How would you describe your current financial situation? Enter the number: "
                        "1. Stable with regular income, "
                        "2. Fluctuating income, "
                        "3. Currently unemployed "),
            'q4': input("What is your level of experience with investments? Enter the number: "
                        "1. None, "
                        "2. Beginner, "
                        "3. Experienced, "
                        "4. Expert "),
            'q5': input("If your investments lost 10% of their value in a month, how would you react? Enter the number: "
                        "1. Sell all investments, "
                        "2. Sell some, "
                        "3. Do nothing, "
                        "4. Buy more "),
            'q6': input("How important is it to have immediate access to your investment funds? Enter the number: "
                        "1. Very important, "
                        "2. Somewhat important, "
                        "3. Not important "),
            'q7': input("What maximum financial loss would you be comfortable with over a year? Enter the number: "
                        "1. 5% of portfolio, "
                        "2. 10% of portfolio, "
                        "3. 20% of portfolio, "
                        "4. More than 20% "),
            'q8': input("What percentage of your monthly income do you save or invest? Enter the number: "
                        "1. Less than 10%, "
                        "2. 10-20%, "
                        "3. More than 20% "),
            'q9': input("How would you rate your knowledge of investing and financial markets? Enter the number: "
                        "1. Poor, "
                        "2. Average, "
                        "3. Good, "
                        "4. Excellent "),
            'q10': input("How many dependents rely on your income? Enter the number: "
                         "1. None, "
                         "2. 1-2, "
                         "3. 3 or more ")
        }
        return self.calculate_risk_tolerance(answers)

    def calculate_risk_tolerance(self, answers):
        total_score = 0
        max_score = 0
        for question, response in answers.items():
            response = int(response)
            if question in self.weights and response in self.weights[question]:
                total_score += self.weights[question][response]
                max_score += max(self.weights[question].values())

        if max_score > 0:
            return total_score / max_score
        return 0

    def provide_recommendations(self, rtc):
        if rtc < 0.34:
            print("\nRecommendations for Low Risk Tolerance:")
            print("1. Invest predominantly in government or high-grade corporate bonds.")
            print("2. Utilize high-interest savings accounts and certificates of deposit.")
            print("3. Consider conservative allocation funds or fixed-income funds.")
            print("4. Explore options like annuities or whole life insurance policies.")
            print("5. Prioritize building a substantial emergency fund (6-12 months of expenses).")
        elif rtc < 0.67:
            print("\nRecommendations for Medium Risk Tolerance:")
            print("1. Invest in balanced or hybrid mutual funds that include a mix of stocks and bonds.")
            print("2. Include stocks that pay consistent dividends for a regular income stream.")
            print("3. Consider investments in real estate properties or REITs.")
            print("4. Enhance financial literacy through workshops or courses on investment strategies.")
            print("5. Conduct regular reviews of your investment portfolio to adjust allocations.")
        else:
            print("\nRecommendations for High Risk Tolerance:")
            print("1. Allocate a significant portion of your portfolio to stocks in high growth sectors.")
            print("2. Explore investments in emerging markets for potential high returns.")
            print("3. Consider speculative investments like cryptocurrencies or start-ups.")
            print("4. Use advanced trading strategies such as options or margin trading.")
            print("5. Engage actively in monitoring and adjusting your investments to capitalize on market movements.")

def main():
    risk = Risk()
    rtc = risk.get_risk_tolerance_coefficient()
    print("User Risk Tolerance Coefficient:", rtc)
    risk.provide_recommendations(rtc)

if __name__ == "__main__":
    main()
