import axios from 'axios';
import { toastr } from 'react-redux-toastr';

import { reset as resetForm, initialize } from 'redux-form';
import { selectTab, showTabs} from './TabActions';


const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {credits: [{}], debts: [{}]}

export function getList() {
    const request = axios(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
} 

export function remove(values)  {
    return submit(values, 'delete')
}

function submit(values, method) {
    const id = values._id ? values._id : ''

    return dispatch => {
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(() => { 
                toastr.success('Sucesso', 'Operação Realizada com sucesso!')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => {
                    toastr.error('Error', error)
                })

            })
    }
}

export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showDelete(billingCycle) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}