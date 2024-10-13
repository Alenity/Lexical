#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, symbol_short, Address, Env, String, Symbol, Vec};

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

impl PitchData {
  pub fn conv_to_vec() {

  }
}

const DATA: Symbol = symbol_short!("DATA");

#[contract]
pub struct CreatePitch;

#[contractimpl]
impl CreatePitch {
  pub fn create_pitch(env: Env, user: Address, prospect: Address, product: Address, token: Address, time_to_live: i32, ratio: i32, description: String) {
    user.require_auth();
    let data: PitchData = PitchData{creator: user, seller: prospect, token: token, product: product, time_to_live: time_to_live, ratio: ratio, description: description};
    env.storage().instance().set(&DATA, &data);
  }

  pub fn get_pitch(env: Env, user: Address) -> Option<PitchData> {
    user.require_auth();
    if env.storage().instance().has(&DATA) {
      return Some(env.storage().instance().get(&DATA).unwrap());
    } else {
      None
    }
    
  }

  pub fn update_pitch(env: Env, user: Address) {
    user.require_auth();
    
  
  }
}