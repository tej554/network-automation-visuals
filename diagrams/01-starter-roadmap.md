# 🧠 1. The Automation Starter Roadmap (Flowchart)

Shows the exact order a beginner should follow.

### **Diagram Focus:**

CLI → Templates → Ansible → Python → Pipelines → Naac

### **Mermaid:**

```mermaid
flowchart LR
    A[Start: Manual Networking] --> B[Identify Repetitive Tasks]
    B --> C[Document Steps Clearly]
    C --> D[Jinja2 Templates]
    D --> E[Ansible Basics]
    E --> F[Python for APIs & Logic]
    F --> G["Source of Truth (NetBox)"]
    G --> H[CI/CD for Network Changes]
    H --> I["Network as Code (Naac)"]
    I --> J[Automation at Scale]

    classDef default fill:#fff,stroke:#333,stroke-width:1px,rx:5,ry:5;
    classDef start fill:#e3f2fd,stroke:#1565c0,stroke-width:2px;
    classDef mid fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px;
    classDef endNode fill:#fff3e0,stroke:#ef6c00,stroke-width:2px;

    class A start;
    class B,C,D,E,F,G,H,I mid;
    class J endNode;
```
