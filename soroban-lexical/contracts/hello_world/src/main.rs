#![no_std]
use soroban_sdk::{contractimpl, Env, Symbol, BytesN, Token};

pub struct Contract;

#[contractimpl]
impl Contract {
    // Store artist and publisher addresses
    pub fn new(env: Env, artist: BytesN<32>, publisher: BytesN<32>) {
        env.storage().set(&Symbol::from("artist"), artist);
        env.storage().set(&Symbol::from("publisher"), publisher);
    }

    // Function to split royalties
    pub fn split_royalties(env: Env, amount: Token) {
        let artist: BytesN<32> = env.storage().get(&Symbol::from("artist")).unwrap();
        let publisher: BytesN<32> = env.storage().get(&Symbol::from("publisher")).unwrap();

        
        let artist_percentage = 0.7; 
        let publisher_percentage = 0.3;

        let artist_amount = amount.amount() * artist_percentage;
        let publisher_amount = amount.amount() * publisher_percentage;

        
        env.transfer(&artist, artist_amount);
        env.transfer(&publisher, publisher_amount);
    }
}
