import { createAsyncThunk } from "@reduxjs/toolkit";

const API = 'http://localhost:80/phReactTest';

export const getTestThunk = createAsyncThunk(
    'test/get',
    async () => {
        const response = await fetch(`${API}/get_test.php`);

        return response.json();
    }
)