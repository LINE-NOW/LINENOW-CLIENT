// boothWaitingAtoms.ts
import { GetBoothWaitingResponseReturn } from "@apis/domains/booth/getBoothWaiting";
import { Booth } from "@interfaces/booth";
import { atom } from "jotai";

export const boothAtom = atom<Booth | null>(null);
export const waitingAtom = atom<GetBoothWaitingResponseReturn | null>(null);
