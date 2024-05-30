export const navRoutes = [
  {
    text: "Home",
    route: "/"
  },
  {
    text: "Integration Guides",
    route: "integration-guides",
    subroutes: [
      {
        text: "Quickstart",
        route: "quickstart"
      },
      {
        text: "Authentication",
        route: "authentication"
      },
      {
        text: "Encryption",
        route: "encryption"
      },
    ]
  },
  {
    text: "Accept Payments",
    route: "accept-payments",
    subroutes: [
      {
        text: "Payment methods",
        route: "payment-methods"
      },
      {
        text: "Checkout page",
        route: "checkout-page"
      }
    ]
  },
  {
    text: "SDKs and Plugins",
    route: "sdks-and-plugins",
    subroutes: [
      {
        text: "Frontend Frameworks",
        route: "frontend-frameworks"
      },
      {
        text: "Backend Libraries",
        route: "backend-libraries"
      },
      {
        text: "Mobile app SDKs",
        route: "mobile-app-sdks"
      }
    ]
  },
  {
    text: "API Reference",
    route: "api-reference",
    subroutes: [
      {
        text: "Create Payment",
        route: "create-payment",
      },
      {
        text: "Charge Card",
        route: "charge-card"
      },
      {
        text: "Authorize Card",
        route: "authorize-card"
      },
      {
        text: "Charge By Transfer",
        route: "charge-by-transfer"
      },
      {
        text: "Get Transaction Status",
        route: "get-transaction-status",
      },
      {
        text: "Charge By USSD",
        route: "charge-by-ussd"
      },
      {
        text: "Get USSD Payment Details",
        route: "get-ussd-payment-details"
      },
      {
        text: "Insert Public Key",
        route: "insert-public-key"
      }
    ]
  }
]