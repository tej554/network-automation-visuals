const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const diagramsDir = path.join(__dirname, 'diagrams');
const files = fs.readdirSync(diagramsDir).filter(f => f.endsWith('.md'));

console.log(`Found ${files.length} diagram files.`);

files.forEach(file => {
    const filePath = path.join(diagramsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract Mermaid code block
    const match = content.match(/```mermaid([\s\S]*?)```/);
    if (match && match[1]) {
        const mermaidCode = match[1].trim();
        const tempMmd = path.join(diagramsDir, `${file}.mmd`);
        const outputPng = path.join(diagramsDir, file.replace('.md', '.png'));
        
        fs.writeFileSync(tempMmd, mermaidCode);
        
        console.log(`Generating image for ${file}...`);
        try {
            // Using npx to run mermaid-cli
            // -i input -o output -b transparent (optional)
            execSync(`npx -y @mermaid-js/mermaid-cli -i "${tempMmd}" -o "${outputPng}"`, { stdio: 'inherit' });
            console.log(`✓ Generated ${outputPng}`);
        } catch (error) {
            console.error(`✗ Failed to generate image for ${file}:`, error.message);
        } finally {
            if (fs.existsSync(tempMmd)) {
                fs.unlinkSync(tempMmd);
            }
        }
    } else {
        console.log(`Skipping ${file} (no mermaid block found)`);
    }
});

console.log('Done.');
