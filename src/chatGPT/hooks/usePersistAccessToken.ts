import * as KeyChain from 'react-native-keychain';
import {useEffect, useState} from 'react';

const TOKEN_ACCESS_KEY = 'react_native_chatgpt_access_token';

interface State {
  isLoaded: boolean;
  accessToken: string;
}

async function persistToken(value: string) {
  return KeyChain.setGenericPassword(TOKEN_ACCESS_KEY, value);
}

async function getTokenFromDisk() {
  return KeyChain.getGenericPassword();
}

export default function usePersistAccessToken() {
  const [state, setState] = useState<State>({
    isLoaded: false,
    accessToken: '',
  });

  useEffect(() => {
    (async () => {
      const accessToken = await getTokenFromDisk();
      if (accessToken !== false) {
        setState({isLoaded: true, accessToken: accessToken?.password || ''});
      }
    })();
  }, []);

  return {
    ...state,
    setAccessToken: async (value: string) => {
      await persistToken(value);
      setState({isLoaded: true, accessToken: value});
    },
  };
}
