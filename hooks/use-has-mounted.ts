"use client"

import { useSyncExternalStore } from "react"

const emptySubscribe = () => () => { }

/**
 * A hook to determine if the component has mounted on the client.
 * Uses useSyncExternalStore for React 18+ hydration safety.
 */
export function useHasMounted() {
    return useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false
    )
}
