#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, symbol_short, Address, Env, String, Symbol};

#[contracttype]
pub enum DataKey {
  Creator(Address),
  Seller(Address),
  Token(Address),
  Product(Address),
  TimeToLive(i32),
  Ratio(i32),
  Description(String),
}
#[contracttype]
pub struct PitchData {
  creator: Address,
  seller: Address,
  token: Address,
  product: Address,
  time_to_live: i32,
  ratio: i32,
  description: String
}

const PITCH_INFO: Symbol = symbol_short!("PitchInfo");

#[contract]
pub struct CreatePitch;

#[contractimpl]
impl CreatePitch {
  pub fn create(env: Env, user: Address, prospect: Address, product: Address, token: Address, time_to_live: i32, ratio: i32, description: String) {
    user.require_auth();
    let data: PitchData = PitchData{creator: user, seller: prospect, token: token, product: product, time_to_live: time_to_live, ratio: ratio, description: description};
    env.storage().instance().set(&PITCH_INFO, &data);
  }
}