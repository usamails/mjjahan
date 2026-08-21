export interface CryptoWallet {
  id: string;
  name: string;
  symbol: string;
  network: string;
  networkBadge: string;
  address: string;
  qrValue: string;
  warningNote: string;
  color: string;
  bgGlow: string;
  iconName?: string;
}

export interface RemittanceStep {
  stepNumber: number;
  title: string;
  instruction: string;
  fieldData?: { label: string; value: string }[];
}

export interface PaymentFAQ {
  question: string;
  answer: string;
}

export const CRYPTO_WALLETS: CryptoWallet[] = [
  {
    id: 'btc',
    name: 'Bitcoin',
    symbol: 'BTC',
    network: 'Bitcoin',
    networkBadge: 'Native Bitcoin',
    address: '1FcThSprBdA4RQ6bZegw4UyYZMys1NbD9w',
    qrValue: 'bitcoin:1FcThSprBdA4RQ6bZegw4UyYZMys1NbD9w',
    warningNote: 'Send only Bitcoin (BTC) via the native Bitcoin network. Do not send via Lightning or wrapped tokens.',
    color: '#f7931a',
    bgGlow: 'rgba(247, 147, 26, 0.15)'
  },
  {
    id: 'usdt-trc20',
    name: 'Tether USD',
    symbol: 'USDT (TRC20)',
    network: 'TRC20',
    networkBadge: 'TRON / TRC20 (Fast & Low Fee)',
    address: 'TQkGnoSN5EaKnNpbXCV7cBdzTG7zYJT6rL',
    qrValue: 'TQkGnoSN5EaKnNpbXCV7cBdzTG7zYJT6rL',
    warningNote: 'Send ONLY USDT through TRC20 (TRON Network). Sending via ERC20 or BEP20 to this address will result in permanent loss.',
    color: '#26a17b',
    bgGlow: 'rgba(38, 161, 123, 0.15)'
  },
  {
    id: 'usdt-bep20',
    name: 'Tether USD',
    symbol: 'USDT (BEP20)',
    network: 'BEP20',
    networkBadge: 'BNB Smart Chain (BEP20)',
    address: '0x4b228fd7190372982df439b0235f296ddebe6dc2',
    qrValue: '0x4b228fd7190372982df439b0235f296ddebe6dc2',
    warningNote: 'Send ONLY USDT through BNB Smart Chain (BEP20 / BSC). Verify the network in your exchange or wallet before confirming.',
    color: '#26a17b',
    bgGlow: 'rgba(38, 161, 123, 0.15)'
  },
  {
    id: 'usdt-erc20',
    name: 'Tether USD',
    symbol: 'USDT (ERC20)',
    network: 'ERC20',
    networkBadge: 'Ethereum / ERC20',
    address: '0x4b228fd7190372982df439b0235f296ddebe6dc2',
    qrValue: '0x4b228fd7190372982df439b0235f296ddebe6dc2',
    warningNote: 'Send ONLY USDT through Ethereum Network (ERC20). Higher gas fees may apply depending on network congestion.',
    color: '#26a17b',
    bgGlow: 'rgba(38, 161, 123, 0.15)'
  },
  {
    id: 'eth',
    name: 'Ethereum',
    symbol: 'ETH',
    network: 'Ethereum / ERC20',
    networkBadge: 'Native Ethereum (ERC20)',
    address: '0x4b228fd7190372982df439b0235f296ddebe6dc2',
    qrValue: 'ethereum:0x4b228fd7190372982df439b0235f296ddebe6dc2',
    warningNote: 'Send native Ethereum (ETH) via the Ethereum ERC20 mainnet only.',
    color: '#627eea',
    bgGlow: 'rgba(98, 126, 234, 0.15)'
  },
  {
    id: 'sol',
    name: 'Solana',
    symbol: 'SOL',
    network: 'Solana',
    networkBadge: 'Native Solana',
    address: '3iPS8xWurfFL6PPSR1czKN6mcAZSAhBa5Bny9TXZYmfg',
    qrValue: 'solana:3iPS8xWurfFL6PPSR1czKN6mcAZSAhBa5Bny9TXZYmfg',
    warningNote: 'Send ONLY native SOL via the Solana network. Instant confirmation and low network fees.',
    color: '#14f195',
    bgGlow: 'rgba(20, 241, 149, 0.15)'
  },
  {
    id: 'bnb',
    name: 'BNB',
    symbol: 'BNB',
    network: 'BNB Smart Chain / BEP20',
    networkBadge: 'BNB Smart Chain (BEP20)',
    address: '0x4b228fd7190372982df439b0235f296ddebe6dc2',
    qrValue: '0x4b228fd7190372982df439b0235f296ddebe6dc2',
    warningNote: 'Send ONLY native BNB on BNB Smart Chain (BEP20 / BSC). Do not use old BEP2 Beacon chain.',
    color: '#f3ba2f',
    bgGlow: 'rgba(243, 186, 47, 0.15)'
  },
  {
    id: 'ltc',
    name: 'Litecoin',
    symbol: 'LTC',
    network: 'Litecoin',
    networkBadge: 'Native Litecoin',
    address: 'LcoRbiEKpYDxEHQrtUsiP2RU1MLQmNYnGy',
    qrValue: 'litecoin:LcoRbiEKpYDxEHQrtUsiP2RU1MLQmNYnGy',
    warningNote: 'Send native Litecoin (LTC) via the Litecoin network.',
    color: '#345d9d',
    bgGlow: 'rgba(52, 93, 157, 0.15)'
  },
  {
    id: 'usdc-erc20',
    name: 'USD Coin',
    symbol: 'USDC (ERC20)',
    network: 'ERC20',
    networkBadge: 'Ethereum / ERC20',
    address: '0x4b228fd7190372982df439b0235f296ddebe6dc2',
    qrValue: '0x4b228fd7190372982df439b0235f296ddebe6dc2',
    warningNote: 'Send ONLY USDC through the Ethereum network (ERC20).',
    color: '#2775ca',
    bgGlow: 'rgba(39, 117, 202, 0.15)'
  },
  {
    id: 'usdc-bep20',
    name: 'USD Coin',
    symbol: 'USDC (BEP20)',
    network: 'BEP20',
    networkBadge: 'BNB Smart Chain (BEP20)',
    address: '0x4b228fd7190372982df439b0235f296ddebe6dc2',
    qrValue: '0x4b228fd7190372982df439b0235f296ddebe6dc2',
    warningNote: 'Send ONLY USDC through the BNB Smart Chain (BEP20).',
    color: '#2775ca',
    bgGlow: 'rgba(39, 117, 202, 0.15)'
  },
  {
    id: 'trx',
    name: 'TRON',
    symbol: 'TRX',
    network: 'TRON / TRC20',
    networkBadge: 'Native TRON (TRC20)',
    address: 'TQkGnoSN5EaKnNpbXCV7cBdzTG7zYJT6rL',
    qrValue: 'TQkGnoSN5EaKnNpbXCV7cBdzTG7zYJT6rL',
    warningNote: 'Send native TRON (TRX) via the TRC20 TRON network.',
    color: '#eb0029',
    bgGlow: 'rgba(235, 0, 41, 0.15)'
  },
  {
    id: 'doge',
    name: 'Dogecoin',
    symbol: 'DOGE',
    network: 'Dogecoin',
    networkBadge: 'Native Dogecoin',
    address: 'D8Az7EYHRMvvtGM1X44eVFyrmEayt3H6h7',
    qrValue: 'dogecoin:D8Az7EYHRMvvtGM1X44eVFyrmEayt3H6h7',
    warningNote: 'Send native Dogecoin (DOGE) via the Dogecoin blockchain network.',
    color: '#c2a633',
    bgGlow: 'rgba(194, 166, 51, 0.15)'
  }
];

export const REMITLY_STEPS: RemittanceStep[] = [
  { stepNumber: 1, title: 'Open Remitly', instruction: 'Go to Remitly website or open the Remitly mobile app on your smartphone.' },
  { stepNumber: 2, title: 'Select Send', instruction: 'Click or tap the Send button to begin a new transfer.' },
  { stepNumber: 3, title: 'Enter the Amount', instruction: 'Enter the exact amount in your local currency (e.g. USD, EUR, GBP, CAD, AUD) that you want to send.' },
  { stepNumber: 4, title: 'Select Currency', instruction: 'Choose the destination currency as Bangladeshi Taka (USD → BDT).' },
  { stepNumber: 5, title: 'Choose Delivery Method', instruction: 'Select "Mobile Money" for instant wallet deposit.' },
  { stepNumber: 6, title: 'Choose Wallet', instruction: 'Select bKash or Upay as the recipient mobile wallet provider.' },
  {
    stepNumber: 7,
    title: 'Enter Recipient Information',
    instruction: 'Fill in the recipient details exactly as shown below:',
    fieldData: [
      { label: 'First Name', value: 'Md Jahan' },
      { label: 'Last Name', value: 'Ali' },
      { label: 'Mobile Number', value: '1774786497' }
    ]
  },
  { stepNumber: 8, title: 'Review and Send', instruction: 'Review all details carefully, select your payment method (Credit/Debit Card or Bank Account), and complete the payment.' }
];

export const XOOM_STEPS: RemittanceStep[] = [
  { stepNumber: 1, title: 'Open Xoom', instruction: 'Visit PayPal Xoom Bangladesh send money portal.' },
  { stepNumber: 2, title: 'Select Bangladesh', instruction: 'Ensure Bangladesh is selected as the recipient country.' },
  { stepNumber: 3, title: 'Enter Amount', instruction: 'Enter the payment amount in USD/EUR or your local currency.' },
  { stepNumber: 4, title: 'Select Mobile Wallet', instruction: 'Choose "bKash" as the receiving mobile money option.' },
  {
    stepNumber: 5,
    title: 'Enter Recipient Information',
    instruction: 'Enter recipient name and contact number:',
    fieldData: [
      { label: 'First Name', value: 'Md Jahan' },
      { label: 'Last Name', value: 'Ali' },
      { label: 'Country Code', value: '+880' },
      { label: 'bKash Number', value: '1774786497' }
    ]
  },
  {
    stepNumber: 6,
    title: 'Enter Address',
    instruction: 'Fill in the recipient registered address details:',
    fieldData: [
      { label: 'Address', value: 'Rohanpur, Gomastapur, Chapai Nawabganj, 6320' },
      { label: 'City', value: 'Rohanpur' },
      { label: 'Post Code', value: '6320' },
      { label: 'State / District', value: 'Chapai Nawabganj' },
      { label: 'Country', value: 'Bangladesh' }
    ]
  },
  { stepNumber: 7, title: 'Review and Send', instruction: 'Pay using your linked PayPal balance, bank account, debit card, or credit card, then finalize the transaction.' }
];

export const WISE_STEPS: RemittanceStep[] = [
  { stepNumber: 1, title: 'Click Send Money', instruction: 'Log in to your Wise account and click "Send Money".' },
  { stepNumber: 2, title: 'Choose Recipient Currency', instruction: 'Select Bangladeshi Taka / BDT as the recipient currency.' },
  { stepNumber: 3, title: 'Select Amount', instruction: 'Enter the amount you need to send to complete your invoice/service.' },
  { stepNumber: 4, title: 'Add Recipient', instruction: 'Choose "Someone Else" (personal or business contact).' },
  { stepNumber: 5, title: 'Choose Delivery Method', instruction: 'Choose "bKash Account" (or Local Bank Account) for instant delivery.' },
  {
    stepNumber: 6,
    title: 'Enter Recipient Information',
    instruction: 'Provide the verified recipient account details:',
    fieldData: [
      { label: 'Account Holder', value: 'Md Jahan Ali' },
      { label: 'Country Code', value: '+880' },
      { label: 'bKash Number', value: '1774786497' }
    ]
  },
  {
    stepNumber: 7,
    title: 'Enter Address',
    instruction: 'Enter the recipient billing and residential address:',
    fieldData: [
      { label: 'Address', value: 'Rohanpur, Gomastapur, Chapai Nawabganj, 6320' },
      { label: 'City', value: 'Rohanpur' },
      { label: 'Post Code', value: '6320' },
      { label: 'State', value: 'Chapai Nawabganj' },
      { label: 'Country', value: 'Bangladesh' }
    ]
  },
  { stepNumber: 8, title: 'Review and Send', instruction: 'Review the guaranteed exchange rate, transfer fee, and confirm payment through your Wise balance, card, or bank debit.' }
];

export const PAYMENT_FAQS: PaymentFAQ[] = [
  {
    question: '1. What payment methods do you accept?',
    answer: 'We accept global payments via Major Cryptocurrencies (BTC, ETH, USDT, USDC, BNB, SOL, LTC, TRX, DOGE), Credit/Debit Card via Remitly, PayPal via Xoom, and direct transfers through Wise.'
  },
  {
    question: '2. Can I pay using Bitcoin?',
    answer: 'Yes. You can send Bitcoin (BTC) directly to our native Bitcoin wallet address (1FcThSprBdA4RQ6bZegw4UyYZMys1NbD9w). Always ensure you send through the standard Bitcoin mainnet.'
  },
  {
    question: '3. Can I pay using USDT?',
    answer: 'Yes! USDT is one of our most popular and fastest payment options. We support USDT on TRC20 (TRON), BEP20 (BNB Smart Chain), and ERC20 (Ethereum).'
  },
  {
    question: '4. Which USDT networks are supported?',
    answer: 'We support USDT on three separate networks: TRC20 (recommended for lowest network fees), BEP20 (BNB Smart Chain), and ERC20 (Ethereum). Please ensure your exchange or wallet matches the selected network address.'
  },
  {
    question: '5. Can I pay using a credit or debit card?',
    answer: 'Yes. You can easily pay with Visa, Mastercard, or Maestro by using Remitly (selecting Mobile Money → bKash to Md Jahan Ali). It takes just 2–3 minutes and supports international cards.'
  },
  {
    question: '6. Can I send payment through PayPal?',
    answer: 'Yes. You can use PayPal’s official international remittance service, Xoom (www.xoom.com), to send funds directly to our verified bKash mobile money account in Bangladesh.'
  },
  {
    question: '7. Can I pay using Wise?',
    answer: 'Yes. Wise provides transparent mid-market exchange rates and minimal fees. You can send BDT directly to our bKash account (+880 1774786497).'
  },
  {
    question: '8. What should I do after completing payment?',
    answer: 'Once you have made the payment, please save your transaction ID / hash or payment receipt and send it to us via WhatsApp (+880 1650-222581) or email (mjjahanali@gmail.com) along with your project/order reference.'
  },
  {
    question: '9. What happens if I use the wrong crypto network?',
    answer: 'Blockchain transactions are irreversible. Sending cryptocurrency through an unsupported network or incorrect contract address may lead to permanent loss of funds that cannot be recovered. Always verify the network before confirming.'
  },
  {
    question: '10. Where can I find my crypto transaction ID?',
    answer: 'In your exchange (Binance, Bybit, Coinbase, KuCoin) or personal wallet (MetaMask, Trust Wallet, Phantom), go to your Withdrawal / Transaction History and click on the transaction to find the TXID or Transaction Hash.'
  }
];
