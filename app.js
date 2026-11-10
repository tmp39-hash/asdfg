/**
 * FAKE EMERGENCY CALL GENERATOR - CAD SIMULATOR
 * Modern, Offline-only Emergency Simulation System
 * Built strictly with HTML, CSS, and Vanilla JavaScript.
 */

// ==========================================
// 1. DATASETS & FICTIONAL GENERATORS
// ==========================================

const FIRST_NAMES = [
  "Marcus", "Elena", "Liam", "Sophia", "David", "Aaliyah", "James", "Chloe", 
  "Carlos", "Maya", "Daniel", "Amara", "Gabriel", "Sarah", "Devon", "Hannah"
];

const LAST_NAMES = [
  "Vance", "Mercer", "Chen", "Ramirez", "O'Connor", "Kowalski", "Patel", 
  "Sterling", "Gomez", "Hawthorne", "Nakamura", "Dubois", "Fletcher", "Rhodes"
];

const STREET_NAMES = [
  "Elmhurst Ave", "Pinewood Boulevard", "Crestview Road", "Riverbank Way", 
  "Harbor Point Drive", "Highland Expressway", "Industrial Parkway", "Sunset Terrace",
  "Maple Grove Lane", "Silver Creek Crossing", "North Gate Bypass", "Beacon Hill Rd"
];

const SECTORS = [
  "Sector 4 (Downtown)", "Zone 9 (Industrial District)", "Sector 12 (Suburban West)", 
  "North Metro Junction", "Sector 3 (Waterfront Docks)", "Hillcrest Highlands"
];

const EMERGENCY_TEMPLATES = {
  "Medical Emergency": [
    {
      description: "My grandfather collapsed in the living room and is having severe chest pains with shallow breathing. He cannot stand up!",
      dialog: [
        { sender: "caller", text: "Help me please! My 72-year-old grandfather just collapsed to the floor clutching his chest!" },
        { sender: "dispatcher", text: "911 Dispatch received. Is he breathing, and is he conscious right now?" },
        { sender: "caller", text: "He is gasping for air and his skin is cold and pale. He barely responds when I shout his name!" },
        { sender: "dispatcher", text: "Paramedics and ambulance Unit 402 are en route with lights and sirens. Lay him flat on his back, loosen tight clothing around his neck, and do not place a pillow under his head." },
        { sender: "caller", text: "Okay, I've got him flat. I hear the sirens in the distance already!" }
      ]
    },
    {
      description: "Severe allergic anaphylactic reaction at a restaurant. A young patron is swelling up and struggling to breathe after eating nuts.",
      dialog: [
        { sender: "caller", text: "We have an emergency at Bistro 9! A customer accidentally ate peanuts and their throat is closing up!" },
        { sender: "dispatcher", text: "Understood. EMS is dispatched. Do you or the patient have an EpiPen auto-injector available on site?" },
        { sender: "caller", text: "Yes! A friend just brought an EpiPen from her purse. Where do we inject it?" },
        { sender: "dispatcher", text: "Firmly press it into the outer midway of the patient's thigh for 3 full seconds. Keep the airway clear and keep them sitting upright." },
        { sender: "caller", text: "Done! It injected. She took a deep breath. Paramedics are pulling up right now!" }
      ]
    }
  ],
  "Road Accident": [
    {
      description: "Two-vehicle collision involving an SUV and a delivery van at the main intersection. Heavy front-end damage, smoke visible.",
      dialog: [
        { sender: "caller", text: "I just witnessed a horrible head-on crash between an SUV and a delivery van! The intersection is completely blocked!" },
        { sender: "dispatcher", text: "Emergency dispatch. Are there passengers trapped inside either vehicle, and do you see fuel leaking or fire?" },
        { sender: "caller", text: "Smoke is billowing from the van's hood! The driver in the sedan is conscious but can't open his door." },
        { sender: "dispatcher", text: "Police units 18 and heavy fire rescue ladder 4 are responding Code 3. Do not approach if there is risk of explosion; keep traffic diverted." },
        { sender: "caller", text: "Bystanders are waving cars away. We got the van driver out safely. Please hurry!" }
      ]
    },
    {
      description: "Motorcyclist swerved into a guardrail on the wet highway overpass. Rider is down on the asphalt shoulder.",
      dialog: [
        { sender: "caller", text: "Emergency! A motorcycle lost control on the wet ramp and slammed the guardrail! The rider slid across the road!" },
        { sender: "dispatcher", text: "Highway Patrol and trauma ambulance are en route. Is the rider moving, and do they still have a helmet on?" },
        { sender: "caller", text: "He is groaning in pain and moving his hands, but his leg looks badly broken. Should we remove the helmet?" },
        { sender: "dispatcher", text: "DO NOT remove the helmet. Stabilize the neck and keep him still until EMS takes cervical precautions." },
        { sender: "caller", text: "Understood, keeping his neck still. A highway officer just arrived on scene!" }
      ]
    }
  ],
  "Fire Accident": [
    {
      description: "Black smoke and flame tongues erupting from a second-story residential apartment unit. Alarm bells audible in background.",
      dialog: [
        { sender: "caller", text: "Fire! There is an active structure fire on the second floor of our apartment building! Flames are pouring out the balcony!" },
        { sender: "dispatcher", text: "Dispatching Fire Engine 9 and Battalion 2 immediately. Has the building alarm been pulled, and is evacuation underway?" },
        { sender: "caller", text: "Yes, the building horns are blaring and families are exiting down the stairwells. But there might still be someone in apartment 204!" },
        { sender: "dispatcher", text: "Do not re-enter the burning structure. Direct evacuees to the north parking lot muster point. Fire crews will arrive in 90 seconds." },
        { sender: "caller", text: "Everyone is out in the parking lot. Fire trucks just turned into the street!" }
      ]
    },
    {
      description: "Commercial kitchen deep fryer grease fire spreading rapidly to ventilation ductwork in a strip mall.",
      dialog: [
        { sender: "caller", text: "Our commercial kitchen exhaust hood caught grease fire and it's spreading into the ceiling duct!" },
        { sender: "dispatcher", text: "Pull the ANSUL suppression handle if safe and evacuate all staff and diners. Do NOT pour water on grease fire." },
        { sender: "caller", text: "We pulled the fire suppression system and discharged a Class K extinguisher. We are all out on the sidewalk!" },
        { sender: "dispatcher", text: "Good job. Fire Station 12 is two blocks away and rolling in now." }
      ]
    }
  ],
  "Crime Report": [
    {
      description: "Prowler attempting forced entry through a rear sliding glass door while homeowners are locked inside the master bedroom.",
      dialog: [
        { sender: "caller", text: "Someone is violently trying to shatter our rear glass patio door with a crowbar! I'm locked in the upstairs room with my daughter!" },
        { sender: "dispatcher", text: "Stay calm and stay quiet. Tactical patrol units are responding Code 3 to your address right now. Keep the bedroom door locked." },
        { sender: "caller", text: "I heard glass shatter downstairs! What should I do?!" },
        { sender: "dispatcher", text: "Stay behind the locked door. Do not confront them. Officers are pulling onto your street with dark approach." },
        { sender: "caller", text: "I see blue flashing lights outside! The intruder just sprinted back out the fence!" },
        { sender: "dispatcher", text: "Officers have perimeter control and are engaging the suspect outside. Remain locked inside until an officer announces themselves." }
      ]
    },
    {
      description: "Armed robbery in progress at a 24-hour convenience store. Masked individual brandishing a handgun behind counter.",
      dialog: [
        { sender: "caller", text: "I'm calling from behind the exterior gas pump. A masked man with a firearm just walked inside demanding cash from the clerk!" },
        { sender: "dispatcher", text: "Stay in cover behind the pump island. Do not enter. Describe the suspect's clothing and direction if visible." },
        { sender: "caller", text: "Wearing a dark grey hoodie, black face covering, roughly 6 feet tall, carrying a black backpack." },
        { sender: "dispatcher", text: "Dispatching sector units 5 and 9. Officers are arriving on high-risk silent approach." }
      ]
    }
  ],
  "Natural Disaster": [
    {
      description: "Flash flood waters rising rapidly along the creek basin. Vehicles stalled in 3 feet of swift moving water with occupants on roofs.",
      dialog: [
        { sender: "caller", text: "The river broke its bank! Flash flood water is sweeping across Lower Creek Road! Two cars are submerged and two people are on the car roof!" },
        { sender: "dispatcher", text: "Water Rescue Task Force and swiftwater boats are deployed. Tell them to stay on the vehicle and NOT jump into swift current." },
        { sender: "caller", text: "The current is very fast! Water is up to the car hood. They're holding onto the roof rack!" },
        { sender: "dispatcher", text: "Water rescue team is 2 minutes out with high-water trucks and inflatables. Keep eyes on them from safe high ground." },
        { sender: "caller", text: "Rescue truck just arrived! They're shooting a tether line!" }
      ]
    },
    {
      description: "Severe seismic tremor causing collapsed chimney and partial roof collapse. Gas smell reported outdoors.",
      dialog: [
        { sender: "caller", text: "Strong earthquake just hit! Our neighbor's brick chimney collapsed through the car garage and we smell strong natural gas outside!" },
        { sender: "dispatcher", text: "Dispatching Fire and Gas Utility emergency response. Evacuate upwind. Do not flip electrical switches, light candles, or start vehicle engines." },
        { sender: "caller", text: "We have everyone gathered up the block away from the structure. Emergency sirens are sounding throughout the neighborhood." }
      ]
    }
  ],
  "Rescue Operation": [
    {
      description: "Commercial office building elevator stuck between 14th and 15th floors with 5 occupants inside, including one experiencing hyperventilation.",
      dialog: [
        { sender: "caller", text: "We are trapped inside elevator Car 3 between the 14th and 15th floor. Power flickered and it stopped dead. One person is having a severe panic attack!" },
        { sender: "dispatcher", text: "Technical Rescue Unit and building engineering have been notified and dispatched. The elevator cab has mechanical safety brakes, you will not fall." },
        { sender: "caller", text: "We pressed the emergency call button too. The air is warm and we need fresh air." },
        { sender: "dispatcher", text: "Sit down on the floor to remain calm. Fire rescue has arrived at the penthouse motor room to perform manual brake leveling." },
        { sender: "caller", text: "We feel the elevator moving slowly to the floor level! Thank goodness." }
      ]
    },
    {
      description: "Hikers lost off-trail in dense ravine after dusk. One companion has slipped down a 20-foot embankment with an injured ankle.",
      dialog: [
        { sender: "caller", text: "We are lost in Pine Valley Ridge. My friend slipped down a steep rocky slope in the dark and cannot climb back up. Ankle is twisted." },
        { sender: "dispatcher", text: "Search and Rescue Mountain Team is activated. Remain exactly at your GPS coordinates. Conserve phone battery and turn on flashlight beacon." },
        { sender: "caller", text: "We have flashlights on strobe and a whistle. We will stay right here." },
        { sender: "dispatcher", text: "Rescue team has your phone triangulated and is hiking up from trail marker 7." }
      ]
    }
  ]
};

// Quick questions the dispatcher can ask during an active call
const FAST_DISPATCH_QUESTIONS = [
  "What is the exact building or apartment number?",
  "Is the patient conscious and breathing normally?",
  "Is the scene safe, or is the hazard still active?",
  "Stay on the line with me, rescue units are approaching."
];

// ==========================================
// 2. STATE MANAGEMENT & LOCAL STORAGE
// ==========================================

const STORAGE_KEY = "APEX911_CAD_SIMULATION_LOGS";

let state = {
  currentCall: null,         // Data for active or ringing call
  timerInterval: null,       // Call duration timer
  callSeconds: 0,            // Elapsed seconds
  audioMasterEnabled: true,  // Master audio toggle
  micMuted: false,           // Dispatcher mic mute state
  speakerEnabled: true,      // Dispatcher speaker state
  audioRingInterval: null,   // Periodic ring sound
  activeAudioContext: null,  // WebAudio context
  conversationTurnIndex: 0   // Current dialog progression
};

// ==========================================
// 3. SOUND SYNTHESIS (100% Native WebAudio)
// ==========================================

function getAudioContext() {
  if (!state.activeAudioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      state.activeAudioContext = new AudioCtx();
    }
  }
  if (state.activeAudioContext && state.activeAudioContext.state === 'suspended') {
    state.activeAudioContext.resume();
  }
  return state.activeAudioContext;
}

// Generates classic US phone ringing dual-tone (440Hz + 480Hz)
function playRingtoneBurst() {
  if (!state.audioMasterEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc1.type = 'sine';
    osc2.type = 'sine';
    osc1.frequency.setValueAtTime(440, ctx.currentTime);
    osc2.frequency.setValueAtTime(480, ctx.currentTime);

    // Envelope for 1.8 second ring burst
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 0.1);
    gainNode.gain.setValueAtTime(0.18, ctx.currentTime + 1.7);
    gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.9);

    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc1.start(ctx.currentTime);
    osc2.start(ctx.currentTime);
    osc1.stop(ctx.currentTime + 2.0);
    osc2.stop(ctx.currentTime + 2.0);
  } catch (e) {
    console.warn("Audio ringtone error:", e);
  }
}

// Quick UI beep or dispatch notification tone
function playCadBeep(freq = 880, duration = 0.15) {
  if (!state.audioMasterEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {}
}

function startRingtoneLoop() {
  stopRingtoneLoop();
  if (!state.audioMasterEnabled) return;
  playRingtoneBurst();
  state.audioRingInterval = setInterval(() => {
    playRingtoneBurst();
  }, 4000);
}

function stopRingtoneLoop() {
  if (state.audioRingInterval) {
    clearInterval(state.audioRingInterval);
    state.audioRingInterval = null;
  }
}

// Text-to-speech for caller voice
function speakText(text) {
  if (!state.speakerEnabled || !state.audioMasterEnabled) return;
  if (!window.speechSynthesis) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1.05;
  utterance.pitch = 1.0;
  
  // Try to pick natural voice if available
  const voices = window.speechSynthesis.getVoices();
  if (voices && voices.length > 0) {
    const englishVoice = voices.find(v => v.lang.startsWith('en') && !v.name.includes('Google') === false) || voices[0];
    if (englishVoice) utterance.voice = englishVoice;
  }

  window.speechSynthesis.speak(utterance);
}

// ==========================================
// 4. RANDOMIZATION & GENERATOR HELPERS
// ==========================================

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomCallerName() {
  return `${getRandomElement(FIRST_NAMES)} ${getRandomElement(LAST_NAMES)}`;
}

function generateRandomPhoneNumber() {
  const areaCode = Math.floor(Math.random() * 800) + 200;
  const mid = Math.floor(Math.random() * 899) + 100;
  const last = Math.floor(Math.random() * 8999) + 1000;
  return `+1 (${areaCode}) ${mid}-${last}`;
}

function generateRandomLocation() {
  const number = Math.floor(Math.random() * 8900) + 100;
  const street = getRandomElement(STREET_NAMES);
  const sector = getRandomElement(SECTORS);
  return `${number} ${street}, ${sector}`;
}

function getRandomScenarioForCategory(category) {
  const pool = EMERGENCY_TEMPLATES[category] || EMERGENCY_TEMPLATES["Medical Emergency"];
  const chosen = getRandomElement(pool);
  return chosen;
}

function randomizeField(fieldName) {
  if (fieldName === 'callerName') {
    document.getElementById('cfgCallerName').value = generateRandomCallerName();
  } else if (fieldName === 'callerPhone') {
    document.getElementById('cfgCallerPhone').value = generateRandomPhoneNumber();
  } else if (fieldName === 'location') {
    document.getElementById('cfgLocation').value = generateRandomLocation();
  }
  playCadBeep(950, 0.08);
}

function randomizeAllInputs() {
  const categories = Object.keys(EMERGENCY_TEMPLATES);
  const randomCat = getRandomElement(categories);
  const priorities = ["Critical", "High", "Medium", "Low"];

  document.getElementById('cfgCallerName').value = generateRandomCallerName();
  document.getElementById('cfgCallerPhone').value = generateRandomPhoneNumber();
  document.getElementById('cfgLocation').value = generateRandomLocation();
  document.getElementById('cfgCategory').value = randomCat;
  document.getElementById('cfgPriority').value = getRandomElement(priorities);
  
  const scenario = getRandomScenarioForCategory(randomCat);
  document.getElementById('cfgDescription').value = scenario.description;
  playCadBeep(650, 0.12);
}

function onCategorySelectChange() {
  const category = document.getElementById('cfgCategory').value;
  const scenario = getRandomScenarioForCategory(category);
  document.getElementById('cfgDescription').value = scenario.description;
}

function generateAIScenario() {
  const category = document.getElementById('cfgCategory').value;
  const scenario = getRandomScenarioForCategory(category);
  document.getElementById('cfgDescription').value = scenario.description;
  playCadBeep(1100, 0.1);
}

// ==========================================
// 5. CALL LIFECYCLE (TRIGGER, ACCEPT, END, REJECT)
// ==========================================

function createCallObject(config) {
  const now = new Date();
  return {
    id: "CAD-" + Math.floor(100000 + Math.random() * 900000),
    callerName: config.callerName,
    callerPhone: config.callerPhone,
    location: config.location,
    category: config.category,
    priority: config.priority,
    description: config.description,
    timestamp: now.toISOString(),
    displayTime: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    displayDate: now.toLocaleDateString(),
    status: "Ringing", // Ringing, Completed, Rejected
    durationSeconds: 0,
    dialog: config.dialog || []
  };
}

// Trigger incoming call modal
function launchIncomingCall(callData) {
  state.currentCall = callData;
  state.conversationTurnIndex = 0;

  // Populate incoming modal
  document.getElementById('incomingCallerName').textContent = callData.callerName;
  document.getElementById('incomingCallerPhone').textContent = callData.callerPhone;
  document.getElementById('incomingCategoryBadge').textContent = callData.category;
  document.getElementById('incomingPriorityBadge').textContent = callData.priority.toUpperCase();
  document.getElementById('incomingLocationText').querySelector('span').textContent = callData.location;

  // Show incoming call overlay
  document.getElementById('incomingCallModal').classList.remove('hidden');

  // Start audible ringing loop
  const soundPref = document.getElementById('cfgAudioRingtone') ? document.getElementById('cfgAudioRingtone').checked : true;
  if (soundPref && state.audioMasterEnabled) {
    startRingtoneLoop();
  }

  // Update UI stats
  updateDashboardStats();
}

// Accept incoming call
function acceptIncomingCall() {
  stopRingtoneLoop();
  document.getElementById('incomingCallModal').classList.add('hidden');
  
  if (!state.currentCall) return;

  state.currentCall.status = "In-Progress";
  state.callSeconds = 0;

  // Populate Active Call screen
  document.getElementById('activeCallerName').textContent = state.currentCall.callerName;
  document.getElementById('activeCallerPhone').textContent = state.currentCall.callerPhone;
  document.getElementById('activeCallerLocation').textContent = state.currentCall.location;
  document.getElementById('activeCallerCategory').textContent = state.currentCall.category;
  document.getElementById('activeCallerDescription').textContent = state.currentCall.description;
  
  const priorityBadge = document.getElementById('activePriorityBadge');
  priorityBadge.textContent = state.currentCall.priority.toUpperCase();
  if (state.currentCall.priority === 'Critical') {
    priorityBadge.className = "px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-red-950 text-red-400 border border-red-800 animate-pulse";
  } else {
    priorityBadge.className = "px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950 text-amber-400 border border-amber-800";
  }

  // Clear & setup transcript box
  const transcriptBox = document.getElementById('transcriptBox');
  transcriptBox.innerHTML = `
    <div class="p-2.5 rounded-xl bg-cadCard/80 border border-cadBorder text-[11px] font-mono text-slate-400 flex items-center justify-between">
      <span>[911 CAD] CALL CONNECTED TO TERMINAL #409-E • RECORDING ACTIVE</span>
      <span class="text-emerald-400">ENCRYPTED LINE</span>
    </div>
  `;

  // Populate suggested quick answers
  setupSuggestedQuickAnswers();

  // Show Active Modal
  document.getElementById('activeCallModal').classList.remove('hidden');

  // Start Running Duration Timer
  startCallTimer();

  // Play initial conversation line after 600ms
  setTimeout(() => {
    deliverNextScriptedTurn();
  }, 700);

  updateDashboardStats();
  playCadBeep(1200, 0.15);
}

// Reject / Decline call
function rejectIncomingCall() {
  stopRingtoneLoop();
  document.getElementById('incomingCallModal').classList.add('hidden');

  if (state.currentCall) {
    state.currentCall.status = "Rejected";
    state.currentCall.durationSeconds = 0;
    saveCallToHistory(state.currentCall);
    state.currentCall = null;
  }

  updateDashboardStats();
  renderHistoryTable();
  renderRecentActivity();
  playCadBeep(300, 0.25);
}

// End an ongoing active call
function endActiveCall() {
  stopCallTimer();
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  
  document.getElementById('activeCallModal').classList.add('hidden');

  if (state.currentCall) {
    state.currentCall.status = "Completed";
    state.currentCall.durationSeconds = state.callSeconds;
    saveCallToHistory(state.currentCall);
    state.currentCall = null;
  }

  updateDashboardStats();
  renderHistoryTable();
  renderRecentActivity();
  playCadBeep(440, 0.2);
}

// Quick triggers
function triggerQuickCall() {
  const categories = Object.keys(EMERGENCY_TEMPLATES);
  const cat = getRandomElement(categories);
  const template = getRandomScenarioForCategory(cat);
  const priorities = ["Critical", "High", "Medium"];

  const callData = createCallObject({
    callerName: generateRandomCallerName(),
    callerPhone: generateRandomPhoneNumber(),
    location: generateRandomLocation(),
    category: cat,
    priority: getRandomElement(priorities),
    description: template.description,
    dialog: template.dialog
  });

  launchIncomingCall(callData);
}

function triggerSpecificCategory(category) {
  const template = getRandomScenarioForCategory(category);
  const callData = createCallObject({
    callerName: generateRandomCallerName(),
    callerPhone: generateRandomPhoneNumber(),
    location: generateRandomLocation(),
    category: category,
    priority: "Critical",
    description: template.description,
    dialog: template.dialog
  });

  launchIncomingCall(callData);
}

function triggerRandomUrgent() {
  triggerSpecificCategory("Medical Emergency");
}

function startCustomCall() {
  const name = document.getElementById('cfgCallerName').value.trim() || generateRandomCallerName();
  const phone = document.getElementById('cfgCallerPhone').value.trim() || generateRandomPhoneNumber();
  const location = document.getElementById('cfgLocation').value.trim() || generateRandomLocation();
  const category = document.getElementById('cfgCategory').value;
  const priority = document.getElementById('cfgPriority').value;
  const description = document.getElementById('cfgDescription').value.trim() || "Incident reported at scene.";

  // Pull matching template dialog or fallback
  const template = getRandomScenarioForCategory(category);

  const callData = createCallObject({
    callerName: name,
    callerPhone: phone,
    location: location,
    category: category,
    priority: priority,
    description: description,
    dialog: template.dialog
  });

  switchTab('dashboard');
  launchIncomingCall(callData);
}

// ==========================================
// 6. TIMER & AUDIO TOGGLES
// ==========================================

function startCallTimer() {
  stopCallTimer();
  state.callSeconds = 0;
  const timerEl = document.getElementById('activeCallTimer');
  timerEl.textContent = "00:00";

  state.timerInterval = setInterval(() => {
    state.callSeconds++;
    const mins = Math.floor(state.callSeconds / 60);
    const secs = state.callSeconds % 60;
    timerEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }, 1000);
}

function stopCallTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function toggleAudioMaster() {
  state.audioMasterEnabled = !state.audioMasterEnabled;
  const icon = document.getElementById('soundMasterIcon');
  const text = document.getElementById('soundMasterText');

  if (state.audioMasterEnabled) {
    icon.setAttribute('data-lucide', 'volume-2');
    icon.classList.remove('text-slate-500');
    icon.classList.add('text-cadGreen');
    text.textContent = "AUDIO ON";
  } else {
    stopRingtoneLoop();
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    icon.setAttribute('data-lucide', 'volume-x');
    icon.classList.remove('text-cadGreen');
    icon.classList.add('text-slate-500');
    text.textContent = "AUDIO OFF";
  }
  lucide.createIcons();
}

function toggleModalAudioRing() {
  if (state.audioRingInterval) {
    stopRingtoneLoop();
    document.getElementById('ringMuteText').textContent = "Unmute Ringtone";
    document.getElementById('ringMuteIcon').classList.replace('text-cadGreen', 'text-slate-500');
  } else {
    startRingtoneLoop();
    document.getElementById('ringMuteText').textContent = "Mute Ringtone";
    document.getElementById('ringMuteIcon').classList.replace('text-slate-500', 'text-cadGreen');
  }
}

function toggleMuteMic() {
  state.micMuted = !state.micMuted;
  const icon = document.getElementById('iconMuteMic');
  const text = document.getElementById('textMuteMic');
  const btn = document.getElementById('btnMuteMic');

  if (state.micMuted) {
    icon.setAttribute('data-lucide', 'mic-off');
    icon.classList.replace('text-emerald-400', 'text-red-400');
    text.textContent = "Mic Muted";
    btn.classList.add('border-red-500/50');
  } else {
    icon.setAttribute('data-lucide', 'mic');
    icon.classList.replace('text-red-400', 'text-emerald-400');
    text.textContent = "Mic Active";
    btn.classList.remove('border-red-500/50');
  }
  lucide.createIcons();
}

function toggleSpeaker() {
  state.speakerEnabled = !state.speakerEnabled;
  const icon = document.getElementById('iconSpeaker');
  const text = document.getElementById('textSpeaker');
  const btn = document.getElementById('btnSpeaker');

  if (!state.speakerEnabled) {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    icon.setAttribute('data-lucide', 'volume-x');
    icon.classList.replace('text-cadAccent', 'text-slate-500');
    text.textContent = "Speaker Off";
    btn.classList.add('border-slate-700');
  } else {
    icon.setAttribute('data-lucide', 'volume-2');
    icon.classList.replace('text-slate-500', 'text-cadAccent');
    text.textContent = "Speaker On";
    btn.classList.remove('border-slate-700');
  }
  lucide.createIcons();
}

// ==========================================
// 7. CONVERSATION TRANSCRIPT & AI DIALOG
// ==========================================

function appendMessageToTranscript(sender, text) {
  const box = document.getElementById('transcriptBox');
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  const isCaller = sender === 'caller';
  const bubble = document.createElement('div');
  bubble.className = `flex gap-3 ${isCaller ? '' : 'justify-end'} animate-scaleUp`;

  if (isCaller) {
    bubble.innerHTML = `
      <div class="w-8 h-8 rounded-full bg-red-600/30 border border-red-500 flex items-center justify-center shrink-0 text-red-400">
        <i data-lucide="phone-incoming" class="w-4 h-4"></i>
      </div>
      <div class="max-w-[80%] space-y-1">
        <div class="flex items-center gap-2">
          <span class="font-bold text-xs text-red-400 font-tech uppercase">${state.currentCall.callerName}</span>
          <span class="text-[10px] font-mono text-slate-500">${timeStr}</span>
        </div>
        <div class="bg-cadCard p-3 rounded-2xl rounded-tl-none border border-red-500/20 text-slate-200 text-xs leading-relaxed shadow">
          ${text}
        </div>
      </div>
    `;
  } else {
    bubble.innerHTML = `
      <div class="max-w-[80%] space-y-1 text-right">
        <div class="flex items-center justify-end gap-2">
          <span class="text-[10px] font-mono text-slate-500">${timeStr}</span>
          <span class="font-bold text-xs text-cadAccent font-tech uppercase">911 CAD Dispatcher (You)</span>
        </div>
        <div class="bg-blue-950/70 p-3 rounded-2xl rounded-tr-none border border-blue-600/40 text-blue-100 text-xs leading-relaxed text-left shadow">
          ${text}
        </div>
      </div>
      <div class="w-8 h-8 rounded-full bg-blue-600/30 border border-blue-400 flex items-center justify-center shrink-0 text-cadAccent">
        <i data-lucide="shield" class="w-4 h-4"></i>
      </div>
    `;
  }

  box.appendChild(bubble);
  box.scrollTop = box.scrollHeight;
  lucide.createIcons();

  // Speak caller text if speech option checked
  if (isCaller) {
    const speechPref = document.getElementById('cfgSpeechVoice') ? document.getElementById('cfgSpeechVoice').checked : true;
    if (speechPref) {
      speakText(text);
    }
  }
}

function deliverNextScriptedTurn() {
  if (!state.currentCall || !state.currentCall.dialog) return;
  const dialog = state.currentCall.dialog;

  if (state.conversationTurnIndex < dialog.length) {
    const turn = dialog[state.conversationTurnIndex];
    appendMessageToTranscript(turn.sender, turn.text);
    state.conversationTurnIndex++;

    // If caller just spoke and next turn is dispatcher, or auto schedule
    if (state.conversationTurnIndex < dialog.length && dialog[state.conversationTurnIndex].sender === 'dispatcher') {
      // Auto reply or let user reply
    }
  }
}

function submitDispatcherMessage() {
  if (state.micMuted) {
    alert("Microphone is currently MUTED. Click 'Mic Muted' button to unmute first.");
    return;
  }
  const input = document.getElementById('dispatcherCustomInput');
  const text = input.value.trim();
  if (!text) return;

  appendMessageToTranscript('dispatcher', text);
  input.value = "";
  playCadBeep(700, 0.08);

  // Deliver the caller's next answer after a realistic 1.5s delay
  setTimeout(() => {
    deliverNextScriptedTurn();
  }, 1400);
}

function setupSuggestedQuickAnswers() {
  const container = document.getElementById('suggestedResponsesContainer');
  container.innerHTML = "";

  FAST_DISPATCH_QUESTIONS.forEach(q => {
    const btn = document.createElement('button');
    btn.type = "button";
    btn.className = "text-[11px] font-mono px-2.5 py-1 rounded-lg bg-cadPanel hover:bg-slate-700 text-slate-300 hover:text-white border border-cadBorder transition truncate max-w-xs";
    btn.textContent = q;
    btn.onclick = () => {
      document.getElementById('dispatcherCustomInput').value = q;
      submitDispatcherMessage();
    };
    container.appendChild(btn);
  });
}

function requestNextAIStatement() {
  deliverNextScriptedTurn();
}

// ==========================================
// 8. STORAGE & LOG HISTORY
// ==========================================

function getStoredLogs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Failed to read storage", e);
    return [];
  }
}

function saveCallToHistory(callObj) {
  try {
    const logs = getStoredLogs();
    logs.unshift(callObj);
    // Keep up to 200 simulation logs
    if (logs.length > 200) logs.pop();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
  } catch (e) {
    console.error("Failed to save call to storage", e);
  }
}

function deleteHistoryRecord(callId) {
  let logs = getStoredLogs();
  logs = logs.filter(l => l.id !== callId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
  renderHistoryTable();
  renderRecentActivity();
  updateDashboardStats();
}

function clearAllHistory() {
  if (confirm("Are you sure you want to clear all simulation history logs?")) {
    localStorage.removeItem(STORAGE_KEY);
    renderHistoryTable();
    renderRecentActivity();
    updateDashboardStats();
  }
}

function exportLogsToCSV() {
  const logs = getStoredLogs();
  if (logs.length === 0) {
    alert("No simulation logs to export yet!");
    return;
  }

  const headers = ["Simulation ID", "Status", "Date", "Time", "Caller Name", "Phone", "Emergency Type", "Priority", "Duration (Sec)", "Location", "Description"];
  const rows = logs.map(l => [
    `"${l.id}"`,
    `"${l.status}"`,
    `"${l.displayDate}"`,
    `"${l.displayTime}"`,
    `"${l.callerName}"`,
    `"${l.callerPhone}"`,
    `"${l.category}"`,
    `"${l.priority}"`,
    l.durationSeconds || 0,
    `"${(l.location || '').replace(/"/g, '""')}"`,
    `"${(l.description || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `ApexCAD_Simulation_Report_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ==========================================
// 9. UI RENDERING & TAB SWITCHING
// ==========================================

function switchTab(tabId) {
  document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById(`nav-${tabId}`);
  if (activeBtn) activeBtn.classList.add('active');

  document.getElementById('tab-dashboard').classList.add('hidden');
  document.getElementById('tab-generator').classList.add('hidden');
  document.getElementById('tab-history').classList.add('hidden');

  const target = document.getElementById(`tab-${tabId}`);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('animate-scaleUp');
  }

  if (tabId === 'history') {
    renderHistoryTable();
  } else if (tabId === 'dashboard') {
    renderRecentActivity();
    updateDashboardStats();
  }
  lucide.createIcons();
}

function updateDashboardStats() {
  const logs = getStoredLogs();
  const total = logs.length;
  const completed = logs.filter(l => l.status === "Completed").length;
  const rejected = logs.filter(l => l.status === "Rejected").length;
  const activeCount = state.currentCall && state.currentCall.status === "In-Progress" ? 1 : 0;

  document.getElementById('statTotalCalls').textContent = total;
  document.getElementById('statCompletedCalls').textContent = completed;
  document.getElementById('statRejectedCalls').textContent = rejected;
  document.getElementById('statActiveCalls').textContent = activeCount;

  const statusText = document.getElementById('activeCallStatusText');
  if (activeCount > 0) {
    statusText.textContent = "Call in progress";
    statusText.classList.add('text-amber-400');
  } else {
    statusText.textContent = "Channel idle";
    statusText.classList.remove('text-amber-400');
  }

  const badge = document.getElementById('historyBadge');
  if (badge) badge.textContent = total;
}

function renderRecentActivity() {
  const container = document.getElementById('recentActivityList');
  const logs = getStoredLogs().slice(0, 5); // top 5 recent

  if (logs.length === 0) {
    container.innerHTML = `
      <div class="text-center py-8 text-slate-500 font-mono text-xs">
        <i data-lucide="inbox" class="w-8 h-8 mx-auto mb-2 opacity-50"></i>
        No recent simulations recorded yet.<br>Click "Quick Trigger" or "Configure Custom Scenario" above.
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = logs.map(call => {
    const isCompleted = call.status === "Completed";
    const statusBg = isCompleted ? "bg-emerald-950/80 text-cadGreen border-emerald-800" : "bg-red-950/80 text-cadRed border-red-800";
    const statusIcon = isCompleted ? "check-circle" : "x-circle";

    return `
      <div class="p-3 rounded-xl bg-cadCard border border-cadBorder hover:border-slate-600 transition flex items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <span class="w-2 h-2 rounded-full ${isCompleted ? 'bg-cadGreen' : 'bg-cadRed'} shrink-0"></span>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-tech text-white text-sm font-semibold">${call.callerName}</span>
              <span class="text-[10px] font-mono px-1.5 py-0.2 rounded ${statusBg} border font-bold uppercase">${call.status}</span>
            </div>
            <div class="text-[11px] text-slate-400 flex items-center gap-2 font-mono mt-0.5">
              <span>${call.category}</span>
              <span>•</span>
              <span>${call.location}</span>
            </div>
          </div>
        </div>
        <div class="text-right font-mono text-[11px] shrink-0 text-slate-400">
          <div>${call.displayTime}</div>
          <div class="text-[10px] text-slate-500">${call.durationSeconds || 0}s duration</div>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function renderHistoryTable() {
  const tbody = document.getElementById('historyTableBody');
  const query = (document.getElementById('historySearch').value || '').toLowerCase();
  const catFilter = document.getElementById('historyFilterCat').value;

  let logs = getStoredLogs();

  // Filter
  if (catFilter !== 'ALL') {
    logs = logs.filter(l => l.category === catFilter);
  }
  if (query) {
    logs = logs.filter(l => 
      (l.callerName && l.callerName.toLowerCase().includes(query)) ||
      (l.callerPhone && l.callerPhone.toLowerCase().includes(query)) ||
      (l.location && l.location.toLowerCase().includes(query)) ||
      (l.description && l.description.toLowerCase().includes(query)) ||
      (l.id && l.id.toLowerCase().includes(query))
    );
  }

  if (logs.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="py-8 text-center text-slate-500 font-mono text-xs">
          No records match the selected filters.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = logs.map(l => {
    const isCompleted = l.status === "Completed";
    const statusClass = isCompleted ? "bg-emerald-950/80 text-cadGreen border-emerald-800" : "bg-red-950/80 text-cadRed border-red-800";
    
    let priorityClass = "text-slate-300";
    if (l.priority === "Critical") priorityClass = "text-cadRed font-bold";
    else if (l.priority === "High") priorityClass = "text-amber-400 font-bold";
    else if (l.priority === "Medium") priorityClass = "text-yellow-400";
    else priorityClass = "text-cadGreen";

    const mins = Math.floor((l.durationSeconds || 0) / 60);
    const secs = (l.durationSeconds || 0) % 60;
    const durStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    return `
      <tr class="hover:bg-cadCard/50 transition">
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold border ${statusClass}">${l.status}</span>
        </td>
        <td class="py-3 px-4 text-slate-300 whitespace-nowrap">
          <div>${l.displayDate}</div>
          <div class="text-[10px] text-slate-500">${l.displayTime}</div>
        </td>
        <td class="py-3 px-4">
          <div class="text-white font-semibold font-sans">${l.callerName}</div>
          <div class="text-slate-400 text-[10px]">${l.callerPhone}</div>
        </td>
        <td class="py-3 px-4 text-slate-200">
          <div>${l.category}</div>
          <div class="text-slate-500 text-[10px] truncate max-w-[200px]" title="${l.location}">${l.location}</div>
        </td>
        <td class="py-3 px-4 ${priorityClass}">
          ${l.priority}
        </td>
        <td class="py-3 px-4 text-slate-300">
          ${durStr}
        </td>
        <td class="py-3 px-4 text-right">
          <button onclick="deleteHistoryRecord('${l.id}')" class="p-1.5 rounded-lg bg-red-950/50 hover:bg-red-900/60 text-red-300 border border-red-800/40 hover:text-white transition" title="Delete Log">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  lucide.createIcons();
}

// ==========================================
// 10. SYSTEM CLOCK & INITIALIZATION
// ==========================================

function updateLiveClock() {
  const clockEl = document.getElementById('liveClock');
  const now = new Date();
  clockEl.textContent = now.toTimeString().split(' ')[0] + " CAD-SYS";
}

window.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  lucide.createIcons();

  // Populate generator form with fresh random template on load
  randomizeAllInputs();

  // Start live digital clock
  updateLiveClock();
  setInterval(updateLiveClock, 1000);

  // Detect speech synthesis capability
  const speechBadge = document.getElementById('speechSupportBadge');
  if (window.speechSynthesis) {
    speechBadge.textContent = "Supported (Browser Engine)";
    speechBadge.className = "text-cadGreen font-semibold";
  } else {
    speechBadge.textContent = "Not Supported";
    speechBadge.className = "text-slate-500";
  }

  // Load stats and history from local storage
  updateDashboardStats();
  renderRecentActivity();
});

