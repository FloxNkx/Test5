import { create } from 'zustand'
import { Service } from '@/interfaces/Service'
import { Car } from '@/interfaces/Car'

interface ServiceState {
    selectedServices: Service[]
    addServices: (services: Service[]) => void
    addService: (service: Service) => void
    removeService: (serviceId: number) => void
    clearServices: () => void

    selectedCar: Car | null
    setSelectedCar: (car: Car) => void
    clearSelectedCar: () => void
}

export const useStore = create<ServiceState>(set => ({
    selectedServices: [],
    addServices: services =>
        set(state => ({
            selectedServices: [...state.selectedServices, ...services],
        })),
    addService: service =>
        set(state => ({
            selectedServices: state.selectedServices.some(
                s => s.id === service.id,
            )
                ? [...state.selectedServices]
                : [...state.selectedServices, service],
        })),
    removeService: serviceId =>
        set(state => ({
            selectedServices: state.selectedServices.filter(
                s => s.id !== serviceId,
            ),
        })),
    clearServices: () => set({ selectedServices: [] }),

    selectedCar: null,
    setSelectedCar: car =>
        set(() => ({
            selectedCar: car,
        })),
    clearSelectedCar: () => set({ selectedCar: null }),
}))

export default useStore
