#![no_std]
use soroban_sdk::{contractimpl, Env, Symbol, BytesN, Token, Storage, panic_with_error};

pub struct Contract;

const ARTIST_KEY: Symbol = Symbol::from("artist");
const PUBLISHER_KEY: Symbol = Symbol::from("publisher");
const ARTIST_PERCENTAGE: u64 = 70;
const PUBLISHER_PERCENTAGE: u64 = 30;
const PERCENTAGE_DENOMINATOR: u64 = 100;

#[contractimpl]
impl Contract {
    // Store artist and publisher addresses
    pub fn new(env: Env, artist: BytesN<32>, publisher: BytesN<32>) {
        env.storage().set(&ARTIST_KEY, &artist);
        env.storage().set(&PUBLISHER_KEY, &publisher);
    }

    // Function to split royalties
    pub fn split_royalties(env: Env, amount: Token) {
        // Check if artist and publisher are initialized
        let artist: BytesN<32> = env.storage().get(&ARTIST_KEY).unwrap_or_else(|| {
            panic_with_error!("Artist address not set")
        });

        let publisher: BytesN<32> = env.storage().get(&PUBLISHER_KEY).unwrap_or_else(|| {
            panic_with_error!("Publisher address not set")
        });

        // Calculate the artist's and publisher's share
        let total_amount = amount.amount();
        let artist_amount = total_amount * ARTIST_PERCENTAGE / PERCENTAGE_DENOMINATOR;
        let publisher_amount = total_amount * PUBLISHER_PERCENTAGE / PERCENTAGE_DENOMINATOR;

        // Transfer royalties to the artist and publisher
        env.transfer(&artist, artist_amount);
        env.transfer(&publisher, publisher_amount);
    }
}

