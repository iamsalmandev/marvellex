import { removeToken } from '~/components';
import { nanoAccessControlAbi } from '~/contracts';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
// Do not update this array without considering its effects
export const userRoles = [
  {
    key: 'DEFAULT_ADMIN_ROLE',
    text: 'DEFAULT ADMIN ROLE',
    value: '0x0000000000000000000000000000000000000000000000000000000000000000',
  },
  {
    key: 'NFT_CHANGE_ROLE',
    text: 'NFT CHANGE ROLE',
    value: '0x86b0132ca1eda10687dcbea3e8da592418e38bd4ac13c9f2e6607dd6b05edc8b',
  },

  {
    key: 'ACCESSCONTROL_CHANGE_ROLE',
    text: 'ACCESSCONTROL CHANGE ROLE',
    value: '0xfc0f767e8e6010ec8e2e2a598ec20a570f98fd16856f776d5ab4b68986be2df7',
  },

  {
    key: 'MARKETPLACE_CHANGE_ROLE',
    text: 'MARKETPLACE CHANGE ROLE',
    value: '0x14ded0a7f2847357b64aabefff435f5a61f3df9a4fe611e96c17ac20b2717bdf',
  },

  {
    key: 'NFT_FACTORY_MINTER_ROLE',
    text: 'NFT FACTORY MINTER ROLE',
    value: '0x3b4c305dc3312177f335af2e4842b2fc863fbfc63acd4d9021ce1cd50875a9d2',
  },

  {
    key: 'MINTER_ROLE',
    text: 'MINTER ROLE',
    value: '0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6',
  },

  {
    key: 'APPROVER_ROLE',
    text: 'APPROVER ROLE',
    value: '0x408a36151f841709116a4e8aca4e0202874f7f54687dcb863b1ea4672dc9d8cf',
  },

  {
    key: 'MARKETPLACE_FEE_ROLE',
    text: 'MARKETPLACE FEE ROLE',
    value: '0x3ffebb93b9e3c8afc6784b8b3d6c0ec30b52dbc8c07d2b78b657737d4c20e01f',
  },

  {
    key: 'MARKETPLACE_BUYER_ROLE',
    text: 'MARKETPLACE BUYER ROLE',
    value: '0x5911a87f5f9dd11829479ced696d221140c7db1edd70dcf93923b47d36e755fc',
  },
];

export const marketplaceAddress =
  process.env.REACT_APP_MARKETPLACE_ADDRESS || '';
const nanoAccessControlAddress =
  process.env.REACT_APP_NANO_ACCESS_CONTROL_ADDRESS;
const marketplaceBuyerRole =
  userRoles.find(({ key, value }) => key === 'MARKETPLACE_BUYER_ROLE')?.value ||
  '';
export const networkChainId = process.env.REACT_APP_ETH_NETWORK_CHAIN_ID || '';

export const getWeb3 = () => {
  try {
    return new Web3(Web3.givenProvider);
  } catch {
    throw new Error('Cannot connect to metamask');
  }
};

export const requestAccount = async (): Promise<string> => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      return accounts[0];
    } catch (e) {
      throw new Error('Please verify if you are logged into meta mask');
    }
  } else {
    throw new Error('Please verify if you have meta mask');
  }
};

export const getChainId = async (): Promise<number | null> => {
  try {
    const chainId = await getWeb3().eth.net.getId();
    return chainId;
  } catch (e) {
    console.log('getChainId error', e);
    throw new Error('Cannot connect to the network');
  }
};

export const connectToContract = async (
  contractAbi: AbiItem,
  adress: string
) => {
  try {
    const web3 = getWeb3();
    return new web3.eth.Contract(contractAbi, adress);
  } catch (error: any) {
    throw new Error('Please try again later.');
  }
};

export const hasRole = async (
  account: string,
  role: string
): Promise<boolean> => {
  try {
    const nanoAccessControlcontract = await connectToContract(
      nanoAccessControlAbi,
      nanoAccessControlAddress
    );
    let isRoleAvailable = await nanoAccessControlcontract.methods
      .hasRole(role, account)
      .call();
    return isRoleAvailable;
  } catch (error: any) {
    console.log('hasRole', error);
    throw new Error('Please try again later.');
  }
};

export const hasMarketplaceBuyerRole = async (
  account: string
): Promise<boolean> => {
  try {
    const isRoleAvailable = await hasRole(account, marketplaceBuyerRole);
    return isRoleAvailable;
  } catch (e) {
    throw e;
  }
};

export const getSignedMessageAndTimeStamp = async (
  account: string
): Promise<{ signature: string; timestamp: number }> => {
  const timestamp = Math.floor(Date.now() / 1000);
  const messageToSign = `Welcome To The Nano Market.\nYou're trying to login @ ${timestamp}`;
  const web3 = getWeb3();
  return await web3.eth.personal
    .sign(messageToSign, account)
    .then(async (signature: any) => {
      return { signature, timestamp };
    })
    .catch(() => {
      throw new Error('Signature Denied');
    });
};

export const logOut = async (): Promise<void> => {
  await removeToken();
  if (window?.location?.pathname !== '/sign-in') {
    window.location = '/sign-in';
  }
};
