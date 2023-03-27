import {atomWithStorage} from 'jotai/utils';
import {atom} from "jotai"; //

const userAtom = atom({});
const userAtomWithStorage = atomWithStorage('user', {})

export {
  userAtom,
  userAtomWithStorage
};
