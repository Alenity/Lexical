#![cfg(test)]
use super::{CreatePitch, CreatePitchClient};
use soroban_sdk::{Env};

#[test]
fn test() {
  let env = Env::default();
  let contract_id = env.register_contract(None, CreatePitch);
  let client = CreatePitchClient::new(&env, &contract_id);

  assert_eq(client.create_pitch(), true)
}
