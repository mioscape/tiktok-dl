import type {BaseProvider, ExtractedInfo} from './base';

import {MusicalyDown} from './musicalyDownProvider';
import {SnaptikProvider} from './snaptikProvider';
import {NativeProvider} from './nativeProvider';

export const Providers: BaseProvider[] = [
    new SnaptikProvider(),
    new MusicalyDown(),
    new NativeProvider(),
];

export const getRandomProvider = () =>
    Providers[Math.floor(Math.random() * Providers.length)];

export const getProvider = (name: string) =>
    name.toLowerCase() !== 'random'
        ? Providers.find((p) => p.resourceName() === name.toLowerCase())
        : getRandomProvider();

export {BaseProvider, ExtractedInfo};
