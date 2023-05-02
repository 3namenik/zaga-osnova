import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    show: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    showFinal: false,
}

/**
 * Спрятать/показать кнопку WhatsApp
 * @param {boolean} toggle 
 */
const hiddenWhats = (toggle) => {
    if (window.innerWidth <= 475) {
        const whatsApp = document.querySelector('.wa-475');

        if (toggle === true) {
            whatsApp.style.display = 'none';
        } else {
            whatsApp.style.display = 'flex';
        }
    }
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        showR(state, action) {
            state.show = action.payload;
            hiddenWhats(state.show);
        },
        showR2(state, action) {
            state.show2 = action.payload;
            hiddenWhats(state.show2);
        },
        showR3(state, action) {
            state.show3 = action.payload;
            hiddenWhats(state.show3);
        },
        showR4(state, action) {
            state.show4 = action.payload;
            hiddenWhats(state.show4);
        },
        showR5(state, action) {
            state.show5 = action.payload;
            hiddenWhats(state.show5);
        },
        showRFinal(state, action) {
            state.showFinal = action.payload;
            hiddenWhats(state.showFinal);
        }
    }
})

export default UserSlice.reducer;