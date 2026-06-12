import React, { useState } from 'react';
import { ExternalLink, Play, Info, Plus, Trash2, Cpu, Network, ShieldCheck } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = () => {
  const [activeTab, setActiveTab] = useState({ 0: 'details', 1: 'details', 2: 'details' });
  const [pingState, setPingState] = useState('idle'); // idle, pinging, completed
  const [pingPath, setPingPath] = useState([]);
  
  // --- WIDGET 1: IP Subnet Calculator ---
  const [ipInput, setIpInput] = useState('192.168.1.75');
  const [cidrInput, setCidrInput] = useState('24');
  const [subnetResult, setSubnetResult] = useState(null);

  // --- WIDGET 2: RBAC Role Dashboard ---
  const [users, setUsers] = useState([
    { id: 1, name: 'Imal L.', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Guest User', role: 'Viewer', status: 'Inactive' },
  ]);
  const [newUserName, setNewUserName] = useState('');
  const [newUserRole, setNewUserRole] = useState('Viewer');

  const setTab = (projectIndex, tab) => {
    setActiveTab((prev) => ({ ...prev, [projectIndex]: tab }));
  };

  const calculateSubnet = () => {
    try {
      const parts = ipInput.split('.').map(Number);
      if (parts.length !== 4 || parts.some(p => isNaN(p) || p < 0 || p > 255)) {
        alert('Invalid IP Address');
        return;
      }
      const cidr = parseInt(cidrInput);
      if (isNaN(cidr) || cidr < 0 || cidr > 32) {
        alert('Invalid CIDR (0-32)');
        return;
      }

      const ipNum = (parts[0] << 24) + (parts[1] << 16) + (parts[2] << 8) + parts[3];
      const mask = cidr === 0 ? 0 : (~0 << (32 - cidr));
      const networkNum = ipNum & mask;
      const broadcastNum = networkNum | ~mask;

      const toIpString = (num) => {
        return [
          (num >>> 24) & 255,
          (num >>> 16) & 255,
          (num >>> 8) & 255,
          num & 255
        ].join('.');
      };

      const subnetMask = toIpString(mask);
      const networkAddr = toIpString(networkNum);
      const broadcastAddr = toIpString(broadcastNum);
      
      const firstHost = cidr >= 31 ? 'N/A' : toIpString(networkNum + 1);
      const lastHost = cidr >= 31 ? 'N/A' : toIpString(broadcastNum - 1);
      const totalHosts = cidr >= 31 ? 0 : Math.pow(2, 32 - cidr) - 2;

      setSubnetResult({
        subnetMask,
        networkAddr,
        broadcastAddr,
        firstHost,
        lastHost,
        totalHosts
      });
    } catch (err) {
      alert('Error calculating Subnet');
    }
  };

  const addUser = (e) => {
    e.preventDefault();
    if (!newUserName.trim()) return;
    const newUser = {
      id: Date.now(),
      name: newUserName,
      role: newUserRole,
      status: 'Active'
    };
    setUsers([...users, newUser]);
    setNewUserName('');
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const triggerPing = () => {
    if (pingState === 'pinging') return;
    setPingState('pinging');
    setPingPath([]);

    setTimeout(() => {
      setPingPath((prev) => [...prev, 'line-host-switch']);
    }, 600);

    setTimeout(() => {
      setPingPath((prev) => [...prev, 'line-switch-router']);
    }, 1200);

    setTimeout(() => {
      setPingPath((prev) => [...prev, 'line-router-server']);
    }, 1800);

    setTimeout(() => {
      setPingState('completed');
    }, 2400);
  };

  const resetPing = () => {
    setPingState('idle');
    setPingPath([]);
  };

  const projectsData = [
    {
      title: 'Campus Wi-Fi RBAC Cisco Network',
      icon: <Network size={24} style={{ color: 'var(--accent-primary)' }} />,
      description: 'Campus Wi-Fi network configuration modeled in Cisco Packet Tracer. Features Role-Based Access Control via VLANs, ACLs, and NAT routing policies to segregate campus traffic securely.',
      tech: ['Cisco Packet Tracer', 'VLANs & ACLs', 'CCNA Networking'],
      github: 'https://github.com/Imal-Lakshitha/campus-wifi-rbac-packet-tracer',
      demoWidget: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-primary)' }}>Ping Packet Tracer (Live Sandbox)</h4>
          <div className="glass" style={{ 
            height: '180px', 
            borderRadius: 'var(--radius-sm)', 
            position: 'relative',
            border: '1px solid var(--border-color)',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-primary)'
          }}>
            <svg width="100%" height="100%" viewBox="0 0 400 180">
              <line id="line-host-switch" x1="50" y1="90" x2="150" y2="90" 
                stroke={pingPath.includes('line-host-switch') ? 'var(--accent-secondary)' : 'var(--border-color)'} 
                strokeWidth={pingPath.includes('line-host-switch') ? '3' : '1.5'} 
              />
              <line id="line-switch-router" x1="150" y1="90" x2="250" y2="90" 
                stroke={pingPath.includes('line-switch-router') ? 'var(--accent-secondary)' : 'var(--border-color)'} 
                strokeWidth={pingPath.includes('line-switch-router') ? '3' : '1.5'}
              />
              <line id="line-router-server" x1="250" y1="90" x2="350" y2="90" 
                stroke={pingPath.includes('line-router-server') ? 'var(--accent-secondary)' : 'var(--border-color)'} 
                strokeWidth={pingPath.includes('line-router-server') ? '3' : '1.5'}
              />

              <circle cx="50" cy="90" r="18" fill="var(--bg-secondary)" stroke="var(--accent-primary)" strokeWidth="2" />
              <text x="50" y="125" fill="var(--text-secondary)" fontSize="10" textAnchor="middle">Host (192.168.1.10)</text>

              <circle cx="150" cy="90" r="18" fill="var(--bg-secondary)" stroke="var(--text-secondary)" strokeWidth="2" />
              <text x="150" y="125" fill="var(--text-secondary)" fontSize="10" textAnchor="middle">L2 Switch</text>

              <circle cx="250" cy="90" r="18" fill="var(--bg-secondary)" stroke="var(--accent-primary)" strokeWidth="2" />
              <text x="250" y="125" fill="var(--text-secondary)" fontSize="10" textAnchor="middle">Router (Gateway)</text>

              <circle cx="350" cy="90" r="18" fill="var(--bg-secondary)" stroke="var(--accent-secondary)" strokeWidth="2" />
              <text x="350" y="125" fill="var(--text-secondary)" fontSize="10" textAnchor="middle">RADIUS Server</text>

              {pingState === 'pinging' && (
                <circle r="6" fill="#22d3ee">
                  <animateMotion 
                    path="M 50,90 L 150,90 L 250,90 L 350,90" 
                    dur="2.4s" 
                    fill="freeze"
                    repeatCount="1"
                  />
                </circle>
              )}
            </svg>
            <div style={{
              position: 'absolute',
              bottom: '10px',
              left: '10px',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)'
            }}>
              Status: <strong style={{
                color: pingState === 'pinging' ? 'var(--accent-secondary)' : 
                       pingState === 'completed' ? '#22c55e' : 'var(--text-tertiary)'
              }}>
                {pingState.toUpperCase()}
              </strong>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              onClick={triggerPing} 
              className="btn btn-primary" 
              style={{ flex: 1, padding: '10px 16px', fontSize: '0.85rem' }}
              disabled={pingState === 'pinging'}
            >
              Run Ping Diagnostic
            </button>
            <button 
              onClick={resetPing} 
              className="btn btn-secondary" 
              style={{ padding: '10px 16px', fontSize: '0.85rem' }}
            >
              Reset
            </button>
          </div>
        </div>
      )
    },
    {
      title: 'User Access & Role Control System',
      icon: <ShieldCheck size={24} style={{ color: 'var(--accent-secondary)' }} />,
      description: 'A user management dashboard demonstrating access controls, administrative options, and role assignment policies. Built with reactive states and structured security filters.',
      tech: ['JavaScript (ES6)', 'HTML5 & CSS3', 'Access Control Policies'],
      github: 'https://github.com/Imal-Lakshitha/User-Management-System',
      demoWidget: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-secondary)' }}>RBAC Policy Manager (Live Sandbox)</h4>
          
          <form onSubmit={addUser} style={{ display: 'flex', gap: '8px', alignItems: 'end' }}>
            <div style={{ flex: 2 }}>
              <label className="form-label" style={{ fontSize: '0.85rem' }}>Username</label>
              <input 
                type="text" 
                placeholder="User name..." 
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
                className="form-control"
                style={{ padding: '8px 12px' }}
              />
            </div>
            <div style={{ flex: 1.2 }}>
              <label className="form-label" style={{ fontSize: '0.85rem' }}>Role</label>
              <select 
                value={newUserRole} 
                onChange={(e) => setNewUserRole(e.target.value)}
                className="form-control"
                style={{ padding: '8px 12px' }}
              >
                <option value="Admin">Admin</option>
                <option value="Operator">Operator</option>
                <option value="Viewer">Viewer</option>
              </select>
            </div>
            <button type="submit" className="btn btn-secondary" style={{ padding: '10px', height: '40px', borderRadius: 'var(--radius-sm)' }}>
              <Plus size={18} />
            </button>
          </form>

          <div className="glass" style={{ overflow: 'hidden', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-color)' }}>
                  <th style={{ padding: '10px' }}>Name</th>
                  <th style={{ padding: '10px' }}>Role</th>
                  <th style={{ padding: '10px' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '10px' }}>{user.name}</td>
                    <td style={{ padding: '10px' }}>
                      <span style={{
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        backgroundColor: user.role === 'Admin' ? 'rgba(239, 68, 68, 0.15)' : 'rgba(34, 211, 238, 0.15)',
                        color: user.role === 'Admin' ? '#f87171' : 'var(--accent-secondary)',
                      }}>
                        {user.role}
                      </span>
                    </td>
                    <td style={{ padding: '10px' }}>
                      <button onClick={() => deleteUser(user.id)} style={{ color: '#ef4444' }} aria-label="Delete User">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      title: 'Interactive IP Subnet Calculator',
      icon: <Cpu size={24} style={{ color: 'var(--accent-primary)' }} />,
      description: 'A subnet calculator utility designed for students and network administrators. Computes subnet masks, CIDR network sizes, broadcast addresses, and usable host ranges with bitwise arithmetic.',
      tech: ['React.js', 'Bitwise Operators', 'HSL Custom Forms'],
      github: 'https://github.com/Imal-Lakshitha',
      demoWidget: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-primary)' }}>IP Subnet Calculator (Live Sandbox)</h4>
          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ flex: 2 }}>
              <label className="form-label" style={{ fontSize: '0.85rem' }}>IP Address</label>
              <input 
                type="text" 
                value={ipInput} 
                onChange={(e) => setIpInput(e.target.value)} 
                className="form-control" 
                style={{ padding: '8px 12px' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label className="form-label" style={{ fontSize: '0.85rem' }}>CIDR (Prefix)</label>
              <input 
                type="number" 
                value={cidrInput} 
                onChange={(e) => setCidrInput(e.target.value)} 
                className="form-control" 
                style={{ padding: '8px 12px' }}
                min="0"
                max="32"
              />
            </div>
          </div>
          <button onClick={calculateSubnet} className="btn btn-primary" style={{ padding: '10px 16px', fontSize: '0.85rem' }}>
            Calculate Subnet
          </button>

          {subnetResult && (
            <div style={{
              marginTop: '12px',
              padding: '16px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              fontSize: '0.9rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }} className="animate-fade-in">
              <div><strong>Subnet Mask:</strong> {subnetResult.subnetMask}</div>
              <div><strong>Network Address:</strong> {subnetResult.networkAddr}</div>
              <div><strong>Usable Range:</strong> {subnetResult.firstHost} - {subnetResult.lastHost}</div>
              <div><strong>Broadcast Address:</strong> {subnetResult.broadcastAddr}</div>
              <div><strong>Total Usable Hosts:</strong> {subnetResult.totalHosts.toLocaleString()}</div>
            </div>
          )}
        </div>
      )
    }
  ];

  return (
    <section id="projects" style={{ padding: '100px 0 60px 0', position: 'relative' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2" style={{ bottom: '20%' }}></div>

        <div className="section-header">
          <h1 className="section-title">Projects Showcase</h1>
          <p className="section-subtitle">
            Explore a selection of my networking utilities and administrative system tools. Toggle "Interactive Sandbox" to test their functionality live!
          </p>
        </div>

        <div className="grid-3 animate-slide-up" style={{ marginBottom: '60px' }}>
          {projectsData.map((project, idx) => (
            <div key={idx} className="glass" style={{
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-md)',
              transition: 'all var(--transition-normal)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              e.currentTarget.style.borderColor = 'var(--accent-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              e.currentTarget.style.borderColor = 'var(--border-color)';
            }}
            >
              <div>
                <div style={{ display: 'flex', justifycontent: 'space-between', alignitems: 'center', marginBottom: '16px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--bg-tertiary)',
                    display: 'flex',
                    alignitems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--border-color)',
                  }}>
                    {project.icon}
                  </div>
                  <div style={{ display: 'flex', gap: '12px', marginLeft: 'auto', alignItems: 'center' }}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} aria-label="GitHub Repository">
                      <GithubIcon size={18} />
                    </a>
                    <a href="#" style={{ color: 'var(--text-secondary)' }} aria-label="Live Demo Link">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>{project.title}</h2>

                <div style={{
                  display: 'flex',
                  gap: '8px',
                  borderBottom: '1px solid var(--border-color)',
                  paddingBottom: '8px',
                  marginBottom: '16px',
                }}>
                  <button 
                    onClick={() => setTab(idx, 'details')}
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: activeTab[idx] === 'details' ? 'var(--accent-primary)' : 'var(--text-tertiary)',
                      display: 'flex',
                      alignitems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Info size={12} />
                    Overview
                  </button>
                  <button 
                    onClick={() => setTab(idx, 'demo')}
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: activeTab[idx] === 'demo' ? 'var(--accent-secondary)' : 'var(--text-tertiary)',
                      display: 'flex',
                      alignitems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Play size={12} />
                    Interactive Sandbox
                  </button>
                </div>

                {activeTab[idx] === 'details' ? (
                  <div className="animate-fade-in">
                    <p style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      marginBottom: '20px',
                      minHeight: '110px',
                    }}>
                      {project.description}
                    </p>
                    
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                      {project.tech.map((tag, tIdx) => (
                        <span key={tIdx} style={{
                          padding: '4px 8px',
                          backgroundColor: 'var(--bg-tertiary)',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--border-color)',
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="animate-fade-in" style={{ minHeight: '180px' }}>
                    {project.demoWidget}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
