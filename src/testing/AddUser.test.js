import React from 'react'
import { render, screen, fireEvent } from "@testing-library/react"
import AddUser from "../pages/Patient/AddUser"

const AddUser = () => {
  return  render (<AddUser/>)
}

describe('AddUser', () => {
    test('render AddUser component', () => {
        setup();
        // screen.debug()

        expect(screen.getByText('Form User')).toBeInTheDocument();
        expect(screen.getByLabelText(/nama/)).toBeInTheDocument();
        expect(screen.getByLabelText(/usia/)).toBeInTheDocument();
        expect(screen.getByLabelText(/jenis_kelamin/)).toBeInTheDocument();
        expect(screen.getByLabelText(/riawayat_penyakit/)).toBeInTheDocument();
    });

    test('input text', () => {
        setup();

        fireEvent.input(
            screen.getByRole("textbox", {name: /nama/i}),
            {target: {value: "Verra"}}
        )
        fireEvent.input(
            screen.getByRole("textbox", {name: /usia/i}),
            {target: {value: "21"}}
        )
        fireEvent.input(
            screen.getByRole("textbox", {name: /jenis_kelamin/i}),
            {target: {value: "Perempuan"}}
        )
        fireEvent.input(
            screen.getByRole("textbox", {name: /riwayat_penyakit/i}),
            {target: {value: "Asma"}}
        )
          
        expect(screen.getByLabelText(/nama/)).toHaveValue("Verra");
        expect(screen.getByLabelText(/usia/)).toHaveValue("21");
        expect(screen.getByLabelText(/jenis_kelamin/)).toHaveValue("Perempuan");
        expect(screen.getByLabelText(/riwayat_penyakit/)).toHaveValue("Asma");
    });

    test('submit button', () => {
        setup();

        fireEvent.click(screen.getByText("Submit"));

        expect(screen.getByLabelText(/Submit/)).toBeInTheDocument("Data Pasien Ditambahkan");
    });
});

export default AddUser