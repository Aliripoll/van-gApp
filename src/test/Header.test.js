import { render, screen } from "@testing-library/react";
import { Header } from '../components/Header';
import '@testing-library/jest-dom'



describe('Header component', () => {

    let paragraph;
    beforeEach(() => {
        render(<Header />);
        paragraph = screen.getByText('Vincent van Gogh');
    });

    test('el nombre del pintor se encuentra en el título', () => {
        expect(paragraph).toBeInTheDocument();
    });

    test('el título tiene un tamaño de fuente de 50px', () => {
        expect(paragraph).toHaveStyle(`fontSize: '50px'`);
    });

    
})