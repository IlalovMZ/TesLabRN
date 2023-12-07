export enum SCREENS {
  WELCOME = 'Welcome',
  MAIN = 'Main',
}

export type StackParamsList = {
  [SCREENS.WELCOME]: undefined;
  [SCREENS.MAIN]: undefined;
};
