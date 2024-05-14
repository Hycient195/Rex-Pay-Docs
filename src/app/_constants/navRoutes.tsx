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
        text: "Normal Integration",
        route: "normal-integration",
        subroutes: [
          {
            text: "Create Payment",
            route: "create-normal-payment",
          },
          {
            text: "Get Transaction Status",
            route: "get-transaction-status",
          },
        ]
      },
      {
        text: "Direct Integration",
        route: "direct-integration",
        subroutes: [
          {
            text: "Insert Public Key",
            route: "insert-public-key",
          },
          {
            text: "Create Payment",
            route: "create-direct-payment",
          },
          {
            text: "Charge Card",
            route: "charge-card",
          },
          {
            text: "Authorize Card",
            route: "autorize-card",
          },
          {
            text: "Charge By Transfer",
            route: "charge-by-transfer",
          },
          {
            text: "Charge By USSD",
            route: "charge-by-ussd",
          },
          {
            text: "Get USSD Payment Details",
            route: "get-ussd-payment-details",
          },
          {
            text: "Get Transaction Status",
            route: "get-transaction-status",
          },
        ]
      }
    ]
  }
]