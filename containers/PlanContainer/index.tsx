import React from "react";
import PlanCard, {PLAN_BENEFIT} from "../../components/PlanCard";

const plans = [
    {
        name: 'Free Plan',
        description: 'Build and test using our core set of products with up to 100 API requests',
        price: 0,
        benefits: [
            PLAN_BENEFIT.TRANSACTIONS,
            PLAN_BENEFIT.AUTH,
            PLAN_BENEFIT.IDENTITY,
        ],
    },
    {
        name: 'Basic Plan',
        description: 'Launch your project with unlimited requests and no contractual minimums',
        price: 249,
        benefits: [
            PLAN_BENEFIT.TRANSACTIONS,
            PLAN_BENEFIT.AUTH,
            PLAN_BENEFIT.IDENTITY,
            PLAN_BENEFIT.INVESTMENTS,
            PLAN_BENEFIT.ASSETS,
        ],
    },
    {
        name: 'Premium Plan',
        description: 'Get tailored solutions, volume pricing, and dedicated support for your team',
        price: 499,
        benefits: [
            PLAN_BENEFIT.TRANSACTIONS,
            PLAN_BENEFIT.AUTH,
            PLAN_BENEFIT.IDENTITY,
            PLAN_BENEFIT.INVESTMENTS,
            PLAN_BENEFIT.ASSETS,
            PLAN_BENEFIT.LIABILITIES,
            PLAN_BENEFIT.INCOME,
        ],
    },
]

const PlanContainer = () => {
    return (
        <>
            {plans?.map((props, index) => (
                <PlanCard {...props}
                          key={index}
                />
            ))}
        </>
    );
};

export default PlanContainer;
