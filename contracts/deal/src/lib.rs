#![no_std]
use soroban_sdk::{contract, contractimpl, Address, Env};

#[contract]
pub struct Deal;

#[contractimpl]
impl Deal {
  pub fn split(env: Env, user: Address) {
    user.require_auth();

    
  }
}