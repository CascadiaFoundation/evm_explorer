#!/bin/bash

export PATH="$PATH: /home/ubuntu/.asdf/shims/elixir"
export SECRET_KEY_BASE=TD2OVtgG4R9ZoI9kBKHPSNViLixogJXDMV1L3l5CP0vKnfT24D3DqE/m+PBrfKET
# export ETHEREUM_JSONRPC_HTTP_URL=https://evmexplorer.velas.com/rpc
export ETHEREUM_JSONRPC_HTTP_URL=http://127.0.0.1:8545
export ETHEREUM_JSONRPC_WS_URL=ws://127.0.0.1:8546

export COIN=CC
export SUBNETWORK=Mainnet
export NETWORK=Cascadia
export DATABASE_URL=postgresql://cascadia:cascadia@localhost:5432/blockscout
/home/ubuntu/.asdf/shims/mix phx.server