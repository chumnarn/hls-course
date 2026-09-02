#!/usr/bin/env bash
mkdir -p /tmp/mybins
ln -sf "/mnt/c/Program Files/nodejs/node.exe" /tmp/mybins/node
# Skip npm.cmd as bash script — call it explicitly
cat > /tmp/mybins/npm <<'EOF'
#!/usr/bin/env bash
exec "/mnt/c/Program Files/nodejs/node.exe" "/mnt/c/Program Files/nodejs/node_modules/npm/bin/npm-cli.js" "$@"
EOF
chmod +x /tmp/mybins/npm
export PATH="/tmp/mybins:$PATH"

cd /mnt/c/Users/000148/.minimax/workspace/hls-course

# Install pdf-lib if not present
if ! npm list pdf-lib 2>/dev/null | grep -q pdf-lib; then
    echo "Installing pdf-lib..."
    npm install pdf-lib 2>&1 | tail -3
fi

echo "---"
node merge_pdf.js
