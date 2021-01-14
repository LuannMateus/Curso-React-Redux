import axios from 'axios';
import { toastr } from 'react-redux-toastr';

import { reset as resetForm } from 'redux-form';
import { selectTab, showTabs} from './TabActions';


const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {

    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
            .then(() => { 
                toastr.success('Sucesso', 'Operação Realizada com sucesso!')
                dispatch([
                    resetForm('billingCycleForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(error => {
                    toastr.error('Error', error)
                })

            })

    }


}