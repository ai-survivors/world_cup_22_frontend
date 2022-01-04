import React from 'react'
import TRow from './TRow'

export default function Table(props) {
    return (
        <table class="table-auto w-full">
        <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
            <tr>
                
                
            <th class=" whitespace-nowrap">
                    <div class="font-semibold text-left">Votes</div>
                </th>
                
                <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left"></div>
                </th>
                <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left"></div>
                </th>
                <th class="p-2 whitespace-nowrap">
                    <div class=" font-semibold text-left"></div>
                </th>
                <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left"></div>
                </th>
                <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left"></div>
                </th>
                <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left"></div>
                </th>
                <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left"></div>
                </th>
                <th class=" whitespace-nowrap">
                    <div class="font-semibold text-left"></div>
                </th>
                
                <th class=" whitespace-nowrap">
                    <div class="font-semibold text-left">Votes</div>
                </th>
                
            </tr>
        </thead>
        <tbody className="text-sm w-30 divide-y divide-gray-100">
            {
              
                      <TRow match={props.match} 
                      Matches={props.Matches} 
                      updateMatch={props.updateMatch}></TRow>
    
            }
        </tbody>
    </table>
    )
}
