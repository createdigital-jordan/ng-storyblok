import { InjectionToken, Type } from '@angular/core';
import { DefaultExport } from '@angular/router';
import { Observable } from 'rxjs';

export type BlokType =
    | Type<unknown>
    | Observable<Type<unknown> | DefaultExport<Type<unknown>>>
    | Promise<Type<unknown> | DefaultExport<Type<unknown>>>;

export type BlokLoader = () => BlokType;

export type BlokLoaders = Record<string, BlokLoader>;
/**
 * Injection token for blok loaders
 */
export const NG_STORYBLOK_BLOKS = new InjectionToken<BlokLoaders>('NG_STORYBLOK_BLOKS');
