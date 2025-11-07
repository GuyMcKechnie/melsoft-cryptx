import btcIcon from "../assets/btc.png";
import cardanoIcon from "../assets/cardano.png";
import ethIcon from "../assets/eth.png";
import liteIcon from "../assets/lite.png";

export const liveMarketData = [
    {
        id: 'eth',
        name: 'Ethereum',
        pair: 'ETH / USDT',
        change: '+14.02%',
        changeDirection: 'up',
        price: '39,786 USD',
        sparkColour: '#6154F0',
        sparkSvg: {
            viewBox: '0 0 162 41',
            size: { width: 162, height: 41 },
            elements: [
                {
                    tag: 'path',
                    props: {
                        d: 'M0 14.8098C9.13205 14.8098 8.75676 21.1766 15.7622 21.1766C22.7676 21.1766 25.7699 34 31.6494 34C37.529 34 40.5313 22.163 45.5351 22.163C50.539 22.163 50.4139 31.3995 58.4201 31.3995C66.4263 31.3995 67.9274 14.8098 74.4324 14.8098C80.9375 14.8098 80.9375 21.1766 87.3174 21.1766C93.6973 21.1766 92.9467 14.8098 101.203 14.8098C109.459 14.8098 110.335 11.4918 115.089 11.4918C119.842 11.4918 121.093 1 129.725 1C138.357 1 135.855 22.163 144.737 22.163C153.619 22.163 150.616 14.8098 162 14.8098',
                        stroke: '#6154F0',
                        strokeWidth: 2,
                        fill: 'none',
                    },
                },
                {
                    tag: 'path',
                    props: {
                        d: 'M15.7622 21.2937C8.75676 21.2937 9.13205 14.8899 0 14.8899V41H162V14.8899C150.616 14.8899 153.619 22.2858 144.737 22.2858C135.855 22.2858 138.357 1 129.725 1C121.093 1 119.842 11.5527 115.089 11.5527C110.335 11.5527 109.459 14.8899 101.203 14.8899C92.9467 14.8899 93.6973 21.2937 87.3174 21.2937C80.9375 21.2937 80.9375 14.8899 74.4324 14.8899C67.9274 14.8899 66.4263 31.5759 58.4201 31.5759C50.4139 31.5759 50.539 22.2858 45.5351 22.2858C40.5313 22.2858 37.529 34.1915 31.6494 34.1915C25.7699 34.1915 22.7676 21.2937 15.7622 21.2937Z',
                        fill: 'url(#paint0_linear_2301_706)',
                    },
                },
                {
                    tag: 'defs',
                    children: [
                        {
                            tag: 'linearGradient',
                            props: {
                                id: 'paint0_linear_2301_706',
                                x1: '83.4545',
                                y1: '1',
                                x2: '83.4395',
                                y2: '41.0009',
                                gradientUnits: 'userSpaceOnUse',
                            },
                            children: [
                                {
                                    tag: 'stop',
                                    props: {
                                        offset: '0',
                                        stopColor: '#001AFF',
                                        stopOpacity: '0.2',
                                    },
                                },
                                {
                                    tag: 'stop',
                                    props: {
                                        offset: '1',
                                        stopColor: '#0029FF',
                                        stopOpacity: '0',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        sparkValues: [],
        icon: ethIcon,
    },
    {
        id: 'btc',
        name: 'Bitcoin',
        pair: 'BTC / USDT',
        change: '+4.02%',
        changeDirection: 'up',
        price: '21,786 USD',
        sparkColour: '#FABC1E',
        sparkSvg: {
            viewBox: '0 0 162 40',
            size: { width: 162, height: 40 },
            elements: [
                {
                    tag: 'defs',
                    children: [
                        {
                            tag: 'linearGradient',
                            props: {
                                id: 'paint0_linear_2301_726',
                                x1: '83.4545',
                                y1: '-2.02814e-09',
                                x2: '83.4395',
                                y2: '40.0009',
                                gradientUnits: 'userSpaceOnUse',
                            },
                            children: [
                                {
                                    tag: 'stop',
                                    props: {
                                        offset: '0',
                                        stopColor: '#FABC1E',
                                        stopOpacity: '0.2',
                                    },
                                },
                                {
                                    tag: 'stop',
                                    props: {
                                        offset: '1',
                                        stopColor: '#FABC1E',
                                        stopOpacity: '0',
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    tag: 'path',
                    props: {
                        d: 'M15.7622 20.2937C8.75676 20.2937 9.13205 13.8899 0 13.8899V40H162V13.8899C150.616 13.8899 153.619 21.2858 144.737 21.2858C135.855 21.2858 138.357 0 129.725 0C121.093 0 119.842 10.5527 115.089 10.5527C110.335 10.5527 109.459 13.8899 101.203 13.8899C92.9467 13.8899 93.6973 20.2937 87.3174 20.2937C80.9375 20.2937 80.9375 13.8899 74.4324 13.8899C67.9274 13.8899 66.4263 30.5759 58.4201 30.5759C50.4139 30.5759 50.539 21.2858 45.5351 21.2858C40.5313 21.2858 37.529 33.1915 31.6494 33.1915C25.7699 33.1915 22.7676 20.2937 15.7622 20.2937Z',
                        fill: 'url(#paint0_linear_2301_726)',
                    },
                },
            ],
        },
        sparkValues: [],
        icon: btcIcon,
    },
    {
        id: 'ltc',
        name: 'Litecoin',
        pair: 'LTC / USDT',
        change: '-4.02%',
        changeDirection: 'down',
        price: '9,786 USD',
        sparkColour: '#3855EC',
        sparkSvg: {
            viewBox: '0 0 162 41',
            size: { width: 162, height: 41 },
            elements: [
                {
                    tag: 'path',
                    props: {
                        d: 'M0 14.8098C9.13205 14.8098 8.75676 21.1766 15.7622 21.1766C22.7676 21.1766 25.7699 34 31.6494 34C37.529 34 40.5313 22.163 45.5351 22.163C50.539 22.163 50.4139 31.3995 58.4201 31.3995C66.4263 31.3995 67.9274 14.8098 74.4324 14.8098C80.9375 14.8098 80.9375 21.1766 87.3174 21.1766C93.6973 21.1766 92.9467 14.8098 101.203 14.8098C109.459 14.8098 110.335 11.4918 115.089 11.4918C119.842 11.4918 121.093 1 129.725 1C138.357 1 135.855 22.163 144.737 22.163C153.619 22.163 150.616 14.8098 162 14.8098',
                        stroke: '#3855EC',
                        strokeWidth: 2,
                        fill: 'none',
                    },
                },
                {
                    tag: 'path',
                    props: {
                        d: 'M15.7622 21.2937C8.75676 21.2937 9.13205 14.8899 0 14.8899V41H162V14.8899C150.616 14.8899 153.619 22.2858 144.737 22.2858C135.855 22.2858 138.357 1 129.725 1C121.093 1 119.842 11.5527 115.089 11.5527C110.335 11.5527 109.459 14.8899 101.203 14.8899C92.9467 14.8899 93.6973 21.2937 87.3174 21.2937C80.9375 21.2937 80.9375 14.8899 74.4324 14.8899C67.9274 14.8899 66.4263 31.5759 58.4201 31.5759C50.4139 31.5759 50.539 22.2858 45.5351 22.2858C40.5313 22.2858 37.529 34.1915 31.6494 34.1915C25.7699 34.1915 22.7676 21.2937 15.7622 21.2937Z',
                        fill: 'url(#paint0_linear_2301_740)',
                    },
                },
                {
                    tag: 'defs',
                    children: [
                        {
                            tag: 'linearGradient',
                            props: {
                                id: 'paint0_linear_2301_740',
                                x1: '81',
                                y1: '1',
                                x2: '81',
                                y2: '41',
                                gradientUnits: 'userSpaceOnUse',
                            },
                            children: [
                                {
                                    tag: 'stop',
                                    props: {
                                        offset: '0',
                                        stopColor: '#3855EC',
                                        stopOpacity: '0.2',
                                    },
                                },
                                {
                                    tag: 'stop',
                                    props: {
                                        offset: '1',
                                        stopColor: '#3855EC',
                                        stopOpacity: '0',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        sparkValues: [],
        icon: liteIcon,
    },
    {
        id: 'ada',
        name: 'Cardano',
        pair: 'ADA / USDT',
        change: '+0.02%',
        changeDirection: 'up',
        price: '4,786 USD',
        sparkColour: '#1ECB4F',
        sparkSvg: {
            viewBox: '0 0 162 41',
            size: { width: 162, height: 41 },
            elements: [
                {
                    tag: 'path',
                    props: {
                        d: 'M0 14.8098C9.13205 14.8098 8.75676 21.1766 15.7622 21.1766C22.7676 21.1766 25.7699 34 31.6494 34C37.529 34 40.5313 22.163 45.5351 22.163C50.539 22.163 50.4139 31.3995 58.4201 31.3995C66.4263 31.3995 67.9274 14.8098 74.4324 14.8098C80.9375 14.8098 80.9375 21.1766 87.3174 21.1766C93.6973 21.1766 92.9467 14.8098 101.203 14.8098C109.459 14.8098 110.335 11.4918 115.089 11.4918C119.842 11.4918 121.093 1 129.725 1C138.357 1 135.855 22.163 144.737 22.163C153.619 22.163 150.616 14.8098 162 14.8098',
                        stroke: '#1ECB4F',
                        strokeWidth: 2,
                        fill: 'none',
                    },
                },
                {
                    tag: 'path',
                    props: {
                        d: 'M15.7622 21.2937C8.75676 21.2937 9.13205 14.8899 0 14.8899V41H162V14.8899C150.616 14.8899 153.619 22.2858 144.737 22.2858C135.855 22.2858 138.357 1 129.725 1C121.093 1 119.842 11.5527 115.089 11.5527C110.335 11.5527 109.459 14.8899 101.203 14.8899C92.9467 14.8899 93.6973 21.2937 87.3174 21.2937C80.9375 21.2937 80.9375 14.8899 74.4324 14.8899C67.9274 14.8899 66.4263 31.5759 58.4201 31.5759C50.4139 31.5759 50.539 22.2858 45.5351 22.2858C40.5313 22.2858 37.529 34.1915 31.6494 34.1915C25.7699 34.1915 22.7676 21.2937 15.7622 21.2937Z',
                        fill: 'url(#paint0_linear_2301_799)',
                    },
                },
                {
                    tag: 'defs',
                    children: [
                        {
                            tag: 'linearGradient',
                            props: {
                                id: 'paint0_linear_2301_799',
                                x1: '81',
                                y1: '1',
                                x2: '81',
                                y2: '41',
                                gradientUnits: 'userSpaceOnUse',
                            },
                            children: [
                                {
                                    tag: 'stop',
                                    props: {
                                        offset: '0',
                                        stopColor: '#1ECB4F',
                                        stopOpacity: '0.2',
                                    },
                                },
                                {
                                    tag: 'stop',
                                    props: {
                                        offset: '1',
                                        stopColor: '#1ECB4F',
                                        stopOpacity: '0',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        sparkValues: [],
        icon: cardanoIcon,
    },
];

export const transactionData = [
    {
        id: 'txn-1',
        asset: 'Ethereum',
        type: 'Received',
        amount: '$24,102',
        timestamp: 'Today, 19:30',
        direction: 'in',
    },
    {
        id: 'txn-2',
        asset: 'Bitcoin',
        type: 'Buy',
        amount: '$4,157',
        timestamp: 'Today, 14:32',
        direction: 'out',
    },
    {
        id: 'txn-3',
        asset: 'Bitcoin',
        type: 'Buy',
        amount: '$64,784',
        timestamp: 'Today, 13:50',
        direction: 'out',
    },
    {
        id: 'txn-4',
        asset: 'Litecoin',
        type: 'Buy',
        amount: '$14,265',
        timestamp: 'Today, 09:38',
        direction: 'out',
    },
];
