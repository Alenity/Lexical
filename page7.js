// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Add click event listeners to buttons
    const buttons = document.querySelectorAll(".review-button, .add-button, .exchange-button, .transfer-button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Button clicked: " + button.textContent);
        });
    });

    // Example functionality for toggling active graph button
    const graphButtons = document.querySelectorAll(".graph-btn");
    graphButtons.forEach(button => {
        button.addEventListener("click", () => {
            graphButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
        const sourceSecretKey = 'SA...YOUR_SECRET_KEY_HERE';
const destinationId = 'GA...DESTINATION_ACCOUNT_ID_HERE';
const amount = '10.0'; // amount of XLM to send

const sourceKeypair = StellarSdk.Keypair.fromSecret(sourceSecretKey);
const sourcePublicKey = sourceKeypair.publicKey();

server.loadAccount(sourcePublicKey)
    .then(account => {
        const transaction = new StellarSdk.TransactionBuilder(account, {
            fee: StellarSdk.BASE_FEE,
            networkPassphrase: StellarSdk.Networks.PUBLIC
        })
            .addOperation(StellarSdk.Operation.payment({
                destination: destinationId,
                asset: StellarSdk.Asset.native(),
                amount: amount
            }))
            .setTimeout(30)
            .build();

        transaction.sign(sourceKeypair);
        return server.submitTransaction(transaction);
    })
    .then(result => {
        console.log('Transaction successful:', result);
    })
    .catch(error => {
        console.error('Transaction failed:', error);
        const sourceSecretKey = 'SA...YOUR_SECRET_KEY_HERE';
const destinationId = 'GA...DESTINATION_ACCOUNT_ID_HERE';
const amount = '10.0'; // amount of XLM to send

const sourceKeypair = StellarSdk.Keypair.fromSecret(sourceSecretKey);
const sourcePublicKey = sourceKeypair.publicKey();

server.loadAccount(sourcePublicKey)
    .then(account => {
        const transaction = new StellarSdk.TransactionBuilder(account, {
            fee: StellarSdk.BASE_FEE,
            networkPassphrase: StellarSdk.Networks.PUBLIC
        })
            .addOperation(StellarSdk.Operation.payment({
                destination: destinationId,
                asset: StellarSdk.Asset.native(),
                amount: amount
            }))
            .setTimeout(30)
            .build();

        transaction.sign(sourceKeypair);
        return server.submitTransaction(transaction);
    })
    .then(result => {
        console.log('Transaction successful:', result);
    })
    .catch(error => {
        console.error('Transaction failed:', error);
    });
    const response = await.fetch(`https://friendbot.stellar.org?addr=${publicKey}`);
const result = await.response.json();
console.log(result); // Check if the funding was successful


    });

    });
});

