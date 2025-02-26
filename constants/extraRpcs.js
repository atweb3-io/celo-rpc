import { mergeDeep } from "../utils/fetch.js";

import { llamaNodesRpcs } from "./llamaNodesRpcs.js";

const privacyStatement = {
  ankr: "For service delivery purposes, we temporarily record IP addresses to set usage limits and monitor for denial of service attacks against our infrastructure. Though we do look at high-level data around the success rate of transactions made over the blockchain RPC, we do not correlate wallet transactions made over the infrastructure to the IP address making the RPC request. Thus, we do not store, exploit, or share any information regarding Personal Identifiable Information (PII), including wallet addresses. https://www.ankr.com/blog/ankrs-ip-address-policy-and-your-privacy/",
  onerpc: "With the exception of data that will be public on chain, all the other metadata / data should remain private to users and other parties should not be able to access or collect it. 1RPC uses many different techniques to prevent the unnecessary collection of user privacy, which prevents tracking from RPC providers. https://docs.1rpc.io/technology/zero-tracking",
  onfinality: "For the sole purpose of providing our service, we temporarily record IP addresses and origins to check against free limits, provide load balancing, prevent DOS attacks, and to determine where best to locate our nodes. We do not, and will never, correlate or link specific wallet addresses or transactions made over our infrastructure to the IP address or origin making the RPC request. After processing IP addresses, we discard the IP address value within 24 hours. Read more here: https://blog.onfinality.io/how-does-onfinality-deal-with-personal-information/",
  tatum: "Tatum Technology s.r.o.'s policy respects your privacy regarding any information we may collect from you across our website, https://tatum.io, and other sites we own and operate. For more info, check https://tatum.io/privacy-policy .",
  drpc: "Specific types of technical data that we may temporarily log include:IP address (only in logs for redirecting requests to the nearest RPC nodes and rate limiting at the free level, which are cleared weekly). The user ID is hidden in the temporary logs, so it is not possible to link them to a specific user.https://drpc.org/privacy-policy",
  Histori: "At Histori, we do not log, store, or track your IP address, country, location, or any personal data while making RPC requests and REST API calls. Learn more at: https://histori.xyz/support/privacy-policy",
  owlracle: "For rate-limiting and to prevent abuse, we collect and store the IP address of the user making the request. This data is stored for 1 month and is not shared with any third parties. https://owlracle.info/privacy",
};

export const extraRpcs = {
  42220: {
    rpcs: [
      "https://forno.celo.org",
      {
        url: "https://rpc.ankr.com/celo",
        tracking: "limited",
        trackingDetails: privacyStatement.ankr,
      },
      {
        url: "https://1rpc.io/celo",
        tracking: "none",
        trackingDetails: privacyStatement.onerpc,
      },
      {
        url: "https://celo.api.onfinality.io/public",
        tracking: "limited",
        trackingDetails: privacyStatement.onfinality,
      },
      {
        url: "https://celo-mainnet.gateway.tatum.io",
        tracking: "yes",
        trackingDetails: privacyStatement.tatum,
      },
      {
        url: "https://celo.drpc.org",
        tracking: "none",
        trackingDetails: privacyStatement.drpc,
      },
      {
        url: "wss://celo.drpc.org",
        tracking: "none",
        trackingDetails: privacyStatement.drpc,
      },
      {
        url: "https://node.histori.xyz/celo-mainnet/8ry9f6t9dct1se2hlagxnd9n2a",
        tracking: "none",
        trackingDetails: privacyStatement.Histori,
      },
      {
        url: "https://rpc.owlracle.info/celo/70d38ce1826c4a60bb2a8e05a6c8b20f",
        tracking: "limited",
        trackingDetails: privacyStatement.owlracle,
      },
    ],
  },
  44787: {
    rpcs: [
      "https://alfajores-forno.celo-testnet.org",
      "wss://alfajores-forno.celo-testnet.org/ws",
      {
        url: "https://node.histori.xyz/celo-testnet/8ry9f6t9dct1se2hlagxnd9n2a",
        tracking: "none",
        trackingDetails: privacyStatement.Histori,
      },
      {
        url: "https://celo-alfajores.drpc.org",
        tracking: "none",
        trackingDetails: privacyStatement.drpc,
      },
      {
        url: "wss://celo-alfajores.drpc.org",
        tracking: "none",
        trackingDetails: privacyStatement.drpc,
      },
    ],
  },
  62320: {
    rpcs: [
      "https://baklava-forno.celo-testnet.org",
    ],
  },
};

const allExtraRpcs = mergeDeep(llamaNodesRpcs, extraRpcs);

export default allExtraRpcs;
