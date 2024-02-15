'use strict';

let CASE_SENSITIVE = true;
let ERROR_MSG = 'There are no coincidences!';
let HIDE_UNMATCHED_ROWS = true;
let BACKGROUND_COLOR = 'mark';
let TEXT_COLOR = '';

function getTableElement(id) {
    return document.querySelector(`table[id="${id}"]`);
}

function getErrorElement(id) {
    return document.querySelector(`span[id="${id}"]`);
}

async function setSettings() {
    try {
        const query = await fetch('search.json');
        const settings = await query.json();

        CASE_SENSITIVE = settings.caseSensitive;
        ERROR_MSG = settings.errorMessage;
        HIDE_UNMATCHED_ROWS = settings.hideUnmatchedRows;
        BACKGROUND_COLOR = settings.styles.backgroundColor;
        TEXT_COLOR = settings.styles.color;
    } catch(e) {
        console.warn(`The configuration file has not been defined...`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInputs = document.querySelectorAll('input[searchInput]');

    searchInputs.forEach((input) => {
        input.addEventListener('input', (event) => {
            const { value } = event.target;

            const tableElementId = event.target.getAttribute('tableElementId');
            const errorElementId = event.target.getAttribute('errorElementId');
            let tableElement = null;
            let errorElement = null;
            
            if (tableElementId) { 
                tableElement = getTableElement(tableElementId);
            }

            if (errorElementId) { 
                errorElement = getErrorElement(errorElementId);
            }

            if (tableElement && errorElement) {
                const tBody = Array.from(tableElement.tBodies[0].children);

                if (value) {
                    const matches = [];
                    const unmatches = [];
                    const hideRows = [];

                    tBody.forEach((tr) => {
                        if (HIDE_UNMATCHED_ROWS) {
                            tr.style.display = '';
                        }
                        
                        for (const td of tr.children) {
                            if (CASE_SENSITIVE ? td.innerText.includes(value) : td.innerText.toLowerCase().includes(value.toLowerCase())) {
                                matches.push(td);
                            } else {
                                unmatches.push(td);
                            };

                            if (HIDE_UNMATCHED_ROWS) {
                                if (CASE_SENSITIVE ? 
                                        !(tr.innerText.includes(value)) : 
                                        !(tr.innerText.toLowerCase().includes(value.toLowerCase()))
                                    ) {
                                    hideRows.push(tr);
                                };
                            };
                        };
                    });

                    matches.forEach((td) => {
                        const originalText = td.innerText;
                        td.innerHTML = `<mark style="background-color: ${BACKGROUND_COLOR}; color: ${TEXT_COLOR}">${originalText}</mark>`
                    });

                    unmatches.forEach((td) => {
                        const originalText = td.innerText;
                        td.innerHTML = `${originalText}`;
                    });

                    hideRows.forEach((tr) => {
                        tr.style.display = 'none';
                    });

                    if (matches.length > 0) {
                        errorElement.innerText = '';
                    } else {
                        errorElement.innerText = `${ERROR_MSG}`;

                        tBody.forEach((tr) => {
                            tr.style.display = '';
                        });
                    };
                } else {
                    tBody.forEach((tr) => {
                        // buscar las coincidencias en los TD
                        for (const td of tr.children) {
                            const originalText = td.innerText;
                            td.innerHTML = `${originalText}`;
                        };

                        tr.style.display = '';
                    });

                    errorElement.innerText = '';
                };
            };
        });
    });
});

setSettings();