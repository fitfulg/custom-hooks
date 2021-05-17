import { useFetch } from "../../hooks/useFetch";
import { renderHook } from "@testing-library/react-hooks";

describe('pruebas en useFetch', () => {
    
    test('debe retornar la info por defecto', () => {
        
        const { result } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        const { data, error, loading } = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
        
    })
    
    test('debe tener la info deseada, loading false, error false ', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        expect(data.length).toBe(1)
    })
    

})
