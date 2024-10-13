#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, symbol_short, Address, Env, String, Symbol};

const USER: Symbol = symbol_short!("User");
const CLIENT: Symbol = symbol_short!("Client");
const PRODUCT: Symbol = symbol_short!("Product");
const RATIO: Symbol = symbol_short!("Ratio");
const TOKEN: Symbol = symbol_short!("Token");
const TTL: Symbol = symbol_short!("TTL");
const DESC: Symbol = symbol_short!("Desc");
#[contract]
pub struct CreatePitch;

#[contractimpl]
impl CreatePitch {
  pub fn create_pitch(env: Env, user: Address, client: Address, product: Address, ratio: i32, token: Address, time_to_live: i32, desc: String) -> bool {
    user.require_auth();
    
    env.storage().instance().set(&USER, &user);
    env.storage().instance().set(&CLIENT, &client);
    env.storage().instance().set(&PRODUCT, &product);
    env.storage().instance().set(&RATIO, &ratio);
    env.storage().instance().set(&TOKEN, &token);
    env.storage().instance().set(&TTL, &time_to_live);
    env.storage().instance().set(&DESC, &desc);
    
    if env.storage().instance().has(&USER) && env.storage().instance().has(&CLIENT) && env.storage().instance().has(&PRODUCT) && env.storage().instance().has(&RATIO) && env.storage().instance().has(&TOKEN) && env.storage().instance().has(&TTL) && env.storage().instance().has(&DESC) {
      return true
    } else {
      return false
    }
  }

  pub fn get_pitch_user(env: Env) -> Option<Address> {
    if env.storage().instance().has(&USER) {
      return Some(env.storage().instance().get(&USER).unwrap())
    } else {
      None
    }
  }
  pub fn get_pitch_client(env: Env) -> Option<Address> {
    if env.storage().instance().has(&CLIENT) {
      return Some(env.storage().instance().get(&CLIENT).unwrap())
    } else {
      None
    }
  }
  pub fn get_pitch_product(env: Env) -> Option<Address> {
    if env.storage().instance().has(&PRODUCT) {
      return Some(env.storage().instance().get(&PRODUCT).unwrap())
    } else {
      None
    }
  }
  pub fn get_pitch_ratio(env: Env) -> Option<i32> {
    if env.storage().instance().has(&RATIO) {
      return Some(env.storage().instance().get(&RATIO).unwrap())
    } else {
      None
    }
  }
  pub fn get_pitch_token(env: Env) -> Option<Address> {
    if env.storage().instance().has(&TOKEN) {
      return Some(env.storage().instance().get(&TOKEN).unwrap())
    } else {
      None
    }
  }
  pub fn get_pitch_ttl(env: Env) -> Option<i32> {
    if env.storage().instance().has(&TTL) {
      return Some(env.storage().instance().get(&TTL).unwrap())
    } else {
      None
    }
  }
  pub fn get_pitch_desc(env: Env) -> Option<String> {
    if env.storage().instance().has(&DESC) {
      return Some(env.storage().instance().get(&DESC).unwrap())
    } else {
      None
    }
  }

  pub fn update_pitch(env: Env, user: Address) {
    user.require_auth();
  }
}