# 🧠 10. “Automation Stack Diagram” (Beautiful Layered View)

Perfect for explaining the architecture.

### **Mermaid:**

```mermaid
flowchart LR
    A[User Input/Intent] --> B["Source of Truth (NetBox, Git)"]
    B --> C[Templates/Jinja2]
    C --> D["Automation Engine (Ansible, Nornir)"]
    D --> E[Python/API Logic]
    E --> F[Network Devices]

    classDef default fill:#fff,stroke:#333,stroke-width:1px,rx:5,ry:5;
    classDef input fill:#e3f2fd,stroke:#1565c0,stroke-width:2px;
    classDef logic fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px;
    classDef device fill:#fff3e0,stroke:#ef6c00,stroke-width:2px;

    class A input;
    class B,C,D,E logic;
    class F device;
```
