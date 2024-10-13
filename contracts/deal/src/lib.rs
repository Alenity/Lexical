#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, symbol_short, Address, Env, String, Symbol};

const STAGE: Symbol = symbol_short!("Stage");
const USER: Symbol = symbol_short!("User");
const CLIENT: Symbol = symbol_short!("Client");
const PRODUCT: Symbol = symbol_short!("Product");
const AMOUNT: Symbol = symbol_short!("Amount");
const RATIO: Symbol = symbol_short!("Ratio");
const TOKEN: Symbol = symbol_short!("Token");
const TTL: Symbol = symbol_short!("TTL");
const DESC: Symbol = symbol_short!("Desc");

#[contracttype]
#[derive(Clone, Copy, Debug, PartialEq)]
pub enum Stage {
  Created = 0,
  Accepted = 1,
  Rejected = 2,
  Completed = 3,
  Expired = 4,
}

#[contract]
pub struct Deal;

#[contractimpl]
impl Deal {
  pub fn propose_deal(env: Env, user: Address, client: Address, product: Address, amount: u32, ratio: u32, token: Address, time_to_live: u32, desc: String) -> bool {
    user.require_auth();
    env.storage().instance().set(&STAGE, &Stage::Created);
    env.storage().instance().set(&USER, &user);
    env.storage().instance().set(&CLIENT, &client);
    env.storage().instance().set(&PRODUCT, &product);
    env.storage().instance().set(&AMOUNT, &amount);
    env.storage().instance().set(&RATIO, &ratio);
    env.storage().instance().set(&TOKEN, &token);
    env.storage().instance().set(&TTL, &time_to_live);
    env.storage().instance().set(&DESC, &desc);

    env.storage().instance().extend_ttl(1000, time_to_live);
    
    if env.storage().instance().has(&USER) && env.storage().instance().has(&CLIENT) && env.storage().instance().has(&PRODUCT) && env.storage().instance().has(&AMOUNT) && env.storage().instance().has(&RATIO) && env.storage().instance().has(&TOKEN) && env.storage().instance().has(&TTL) && env.storage().instance().has(&DESC) {
      return true
    } else {
      return false
    }
  }

  pub fn decide_deal(env: Env, decision: bool, len_of_deal: u32) {
    if decision {
      env.storage().instance().extend_ttl(1000, len_of_deal);
      env.storage().instance().update(&TTL, |_| len_of_deal);
      env.storage().instance().update(&STAGE, |_| Stage::Accepted);
    } else {
      env.storage().instance().update(&STAGE, |_| Stage::Rejected);
    }
   
  }

  pub fn get_stage(env: Env) -> Option<Stage> {
    if env.storage().instance().has(&STAGE) {
      return Some(env.storage().instance().get(&STAGE).unwrap())
    } else {
      None
    }
  }

  pub fn get_deal_user(env: Env) -> Option<Address> {
    if env.storage().instance().has(&USER) {
      return Some(env.storage().instance().get(&USER).unwrap())
    } else {
      None
    }
  }
  pub fn get_deal_client(env: Env) -> Option<Address> {
    if env.storage().instance().has(&CLIENT) {
      return Some(env.storage().instance().get(&CLIENT).unwrap())
    } else {
      None
    }
  }
  pub fn get_deal_product(env: Env) -> Option<Address> {
    if env.storage().instance().has(&PRODUCT) {
      return Some(env.storage().instance().get(&PRODUCT).unwrap())
    } else {
      None
    }
  }
  pub fn get_deal_amount(env: Env) -> Option<u32> {
    if env.storage().instance().has(&AMOUNT) {
      return Some(env.storage().instance().get(&AMOUNT).unwrap())
    } else {
      None
    }
  }
  pub fn get_deal_ratio(env: Env) -> Option<u32> {
    if env.storage().instance().has(&RATIO) {
      return Some(env.storage().instance().get(&RATIO).unwrap())
    } else {
      None
    }
  }
  pub fn get_deal_token(env: Env) -> Option<Address> {
    if env.storage().instance().has(&TOKEN) {
      return Some(env.storage().instance().get(&TOKEN).unwrap())
    } else {
      None
    }
  }
  pub fn get_deal_ttl(env: Env) -> Option<u32> {
    if env.storage().instance().has(&TTL) {
      return Some(env.storage().instance().get(&TTL).unwrap())
    } else {
      None
    }
  }
  pub fn get_deal_desc(env: Env) -> Option<String> {
    if env.storage().instance().has(&DESC) {
      return Some(env.storage().instance().get(&DESC).unwrap())
    } else {
      None
    }
  }
}