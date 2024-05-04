# SSO Experiment

DO NOT USE IN PRODUCTION!

## Setup TLD for local development work (optional; can use hosts file instead)
Setup *.test domains (e.g. myproject.test) without having to change the hosts file each time.
Note that .test is not a "real" TLD in the ICANN root (.dev for example is and should therefore not be used).

```bash
brew install dnsmasq
echo 'address=/.test/127.0.0.1' >> $(brew --prefix)/etc/dnsmasq.conf
sudo brew services start dnsmasq
sudo bash -c 'echo "nameserver 127.0.0.1" > /etc/resolver/test'

# Show all resolvers
scutil --dns
```

## Configure project

```bash
# Generate pem files for SSL
mkcert -cert-file proxy/certs/cert.pem -key-file proxy/certs/cert-key.pem "*.foobar.test"
openssl dhparam -out proxy/certs/dhparam.pem 2048

# Update `NEXTAUTH_SECRET` in the `.env` files. Generate secrets using:
openssl rand -base64 32

# Install node modules in both apps 'go' and 'my'
```

## Run project
Apps to run locally and compose to provide identity infra (Zitadel using Postgres) and reverse proxy (Nginx)

```bash
cd ./go && npm run dev
cd ./my && npm run dev
docker compose up -d

# https://zitadel.foobar.test
# Initial login: zitadel-admin@zitadel.zitadel.foobar.test, Password1!

# Create projects and applications with callbacks:
# https://my.foobar.test/api/auth/callback/foobar & https://go.foobar.test/api/auth/callback/foobar
# Enable "User roles inside ID Token" and "User Info inside ID Token" 

# Update `ZITADEL_CLIENTID` in the `.env` files after setting up OIDC with PKCE.

```