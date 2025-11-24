# 🧠 6. Task → Automation Mapping Diagram

Shows what tool fits what task.

### **Mermaid:**

```mermaid
flowchart LR
   A[Common Networking Tasks] --> B[Generate Configs]
   A --> C[Push Changes]
   A --> D[Pull Device State]
   A --> E[Validate Policies]

   B --> B2[Jinja2 Templates]
   C --> C2[Ansible Playbooks]
   D --> D2[Python + APIs]
   E --> E2[Batfish/pyATS]

    classDef default fill:#fff,stroke:#333,stroke-width:1px,rx:5,ry:5;
    classDef root fill:#e3f2fd,stroke:#1565c0,stroke-width:2px;
    classDef task fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px;
    classDef tool fill:#fff3e0,stroke:#ef6c00,stroke-width:2px;

   class A root;
   class B,C,D,E task;
   class B2,C2,D2,E2 tool;
```
