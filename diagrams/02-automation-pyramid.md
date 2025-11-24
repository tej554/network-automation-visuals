# 🧠 2. The “Automation Pyramid” (Hierarchy Diagram)

Shows how engineers progress from foundations → expert.

### **Mermaid:**

```mermaid
flowchart LR
   F[Strong Networking Fundamentals] --> E[Documentation of Manual Tasks]
   E --> D[Ansible + Jinja2]
   D --> C[Python API Automation]
   C --> B[Naac / GitOps / Pipelines]
   B --> A[Network Automation at Scale]

   classDef default fill:#fff,stroke:#333,stroke-width:1px,rx:5,ry:5;
   classDef level1 fill:#e3f2fd,stroke:#1565c0,stroke-width:2px;
   classDef level2 fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px;
   classDef level3 fill:#fff3e0,stroke:#ef6c00,stroke-width:2px;
   classDef top fill:#fce4ec,stroke:#c2185b,stroke-width:2px;

   class F,E level1;
   class D,C level2;
   class B level3;
   class A top;
```
