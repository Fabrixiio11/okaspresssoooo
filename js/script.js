/* Script para el boton de compra */ 

document.addEventListener('DOMContentLoaded', (event) => {
    // Initial storage count
    let storageCount = 5;

    // Function to update the display
    const updateStorageDisplay = () => {
        document.getElementById('itemStorage').textContent = storageCount;
    };

    // Confirm purchase button click handler
    document.getElementById('confirmPurchaseButton').addEventListener('click', () => {
        if (storageCount > 0) {
            storageCount--;
            updateStorageDisplay();
            $('#purchaseModal').modal('hide');
        } else {
            alert('ERROR: No quedan unidades disponibles.');
        }
    });

    // Initial display update
    updateStorageDisplay();
});