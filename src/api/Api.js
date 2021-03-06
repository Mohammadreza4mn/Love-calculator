import axios from "axios";

export const getPercentageAPI = async (fname, sname) => {
    try {
        const response = await axios.request(
            {
                method: 'GET',
                url: 'https://love-calculator.p.rapidapi.com/getPercentage',
                params: { fname: fname, sname: sname },
                headers: {
                    'x-rapidapi-key': 'dcedb73688mshcfac6f6124da828p19d4ddjsn5532507128b0',
                    'x-rapidapi-host': 'love-calculator.p.rapidapi.com'
                }
            }
        );
        return response;
    } catch (error) {
        if (error.response) {
            return error.response;
        }
    }
};
