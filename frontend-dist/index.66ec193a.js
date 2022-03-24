var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequire94c2;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},e.parcelRequire94c2=n);var i=n("fBBKY");n("8aCbc");var s=n("9lAXI"),a=(i=n("fBBKY"),i=n("fBBKY"),n("85ulz")),r=n("5Kx1V"),l=n("inK2Y");i=n("fBBKY");const c=e=>{const t=`${e}\n`.replace("\r\n","\n"),o=t.indexOf("### A Pluto.jl notebook ###"),n=t.match(/# ... ........-....-....-....-............/g)?.length;let i=t.indexOf("# ╔═╡ Cell order:")+17+1;for(let e=1;e<=n;e++)i=t.indexOf("\n",i+1)+1;return t.slice(o,i)},d=async e=>{let t;if(console.log(e),(e?.path??e?.composedPath()).filter((e=>e?.classList?.contains(".cm-editor")))?.length>0)return;switch(e.type){case"paste":t=c(e.clipboardData.getData("text/plain"));break;case"dragstart":return void(e.dataTransfer.dropEffect="move");case"dragover":return void e.preventDefault();case"drop":e.preventDefault(),t=e.dataTransfer.types.includes("Files")?await(n=e.dataTransfer.files[0],new Promise(((e,t)=>{const{name:o,type:i}=n,s=new FileReader;s.onerror=()=>t("Failed to read file!"),s.onloadstart=()=>{},s.onprogress=({loaded:e,total:t})=>{},s.onload=()=>{},s.onloadend=({target:{result:t}})=>e({file:t,name:o,type:i}),s.readAsText(n)}))).then((({file:e})=>e)):c(await(o=e.dataTransfer.items[0],new Promise(((e,t)=>{try{o.getAsString((t=>{console.log(t),e(t)}))}catch(e){t(e)}}))))}var o,n;if(!t)return;document.body.classList.add("loading");const i=await fetch("./notebookupload",{method:"POST",body:t});if(i.ok)window.location.href=_(await i.text());else{let e=await i.blob();window.location.href=URL.createObjectURL(e)}},h=()=>(i.useEffect((()=>(document.addEventListener("paste",d),document.addEventListener("drop",d),document.addEventListener("dragstart",d),document.addEventListener("dragover",d),()=>{document.removeEventListener("paste",d),document.removeEventListener("drop",d),document.removeEventListener("dragstart",d),document.removeEventListener("dragover",d)}))),i.html`<span />`),p=(e,t=null)=>({transitioning:!1,notebook_id:t,path:e}),u=(e,t)=>e.split(/\/|\\/).slice(-t).join("/"),m=e=>e.toLowerCase().normalize("NFD").replace(/[^a-z1-9]/g,""),f=e=>"open?"+new URLSearchParams({path:e}).toString(),_=e=>"edit?id="+e;class b extends i.Component{constructor(){super(),this.state={combined_notebooks:null,connected:!1,extended_components:{show_samples:!0,CustomWelcome:null,Picker:{},Recent:({recents:e})=>i.html`
                    <p>Recent sessions:</p>
                    <ul id="recent">
                        ${e}
                    </ul>
                `}};const e=this.set_notebook_state=(e,t)=>{this.setState((o=>({combined_notebooks:o.combined_notebooks.map((o=>o.path==e?{...o,...t}:o))})))};this.client={},this.client_promise=r.create_pluto_connection({on_unrequested_update:({message:e,type:t})=>{if("notebook_list"===t){const t=e.notebooks,o=[],n=this.state.combined_notebooks.map((e=>{let n=null;if(n=e.notebook_id?t.find((t=>t.notebook_id==e.notebook_id)):t.find((t=>t.path==e.path)),null==n)return p(e.path);{const e=p(n.path,n.notebook_id);return o.push(n),e}})),i=t.filter((e=>!o.includes(e)));this.setState({combined_notebooks:[...i,...n]})}},on_connection_status:e=>this.setState({connected:e}),on_reconnect:()=>!0}),this.client_promise.then((async e=>{Object.assign(this.client,e);try{const{default:t}=await import(this.client.session_options.server.injected_javascript_data_url),{custom_welcome:o,custom_recent:n,custom_filepicker:s,show_samples:a=!0}=t({client:e,editor:this,imports:{preact:i}});this.setState({extended_components:{...this.state.extended_components,Recent:n,Welcome:o,Picker:s,show_samples:a}})}catch(e){}this.client.send("get_all_notebooks",{},{}).then((({message:e})=>{const t=e.notebooks.map((e=>p(e.path,e.notebook_id))),o=g(),n=[...s.default.sortBy(t,[e=>s.default.findIndex([...o,...t],(t=>t.path===e.path))]),...s.default.differenceBy(o,t,(e=>e.path))];this.setState({combined_notebooks:n}),document.body.classList.remove("loading")})),r.fetch_pluto_releases().then((e=>{const t=this.client.version_info.pluto,o=e[e.length-1].tag_name;console.log(`Pluto version ${t}`);const n=e.findIndex((e=>e.tag_name===t));if(-1!==n){e.slice(n+1).filter((e=>e.body.toLowerCase().includes("recommended update"))).length>0&&(console.log(`Newer version ${o} is available`),this.client.version_info.dismiss_update_notification||alert("A new version of Pluto.jl is available! 🎉\n\n    You have "+t+", the latest is "+o+'.\n\nYou can update Pluto.jl using the julia package manager:\n    import Pkg; Pkg.update("Pluto")\nAfterwards, exit Pluto.jl and restart julia.'))}})).catch((()=>{})),this.client.send("completepath",{query:"nothinginparticular"},{})})),this.on_open_path=async e=>{const t=await(async e=>{try{const t=new URL(e);if(!["http:","https:","ftp:","ftps:"].includes(t.protocol))throw"Not a web URL";if("gist.github.com"===t.host){console.log("Gist URL detected");const e=t.pathname.substring(1).split("/")[1],o=await(await fetch(`https://api.github.com/gists/${e}`,{headers:{Accept:"application/vnd.github.v3+json"}}).then((e=>e.ok?e:Promise.reject(e)))).json();console.log(o);const n=Object.values(o.files),i=n.find((e=>m("#file-"+e.filename)===m(t.hash)));return null!=i?{type:"url",path_or_url:i.raw_url}:{type:"url",path_or_url:n[0].raw_url}}return"github.com"===t.host&&t.searchParams.set("raw","true"),{type:"url",path_or_url:t.href}}catch(t){return'"'===e[e.length-1]&&'"'===e[0]&&(e=e.slice(1,-1)),{type:"path",path_or_url:e}}})(e);var o;"path"===t.type?(document.body.classList.add("loading"),window.location.href=f(t.path_or_url)):confirm("Are you sure? This will download and run the file at\n\n"+t.path_or_url)&&(document.body.classList.add("loading"),window.location.href=(o=t.path_or_url,"open?"+new URLSearchParams({url:o}).toString()))},this.on_session_click=t=>{if(t.transitioning)return;null!=t.notebook_id?confirm("Shut down notebook process?")&&(e(t.path,{running:!1,transitioning:!0}),this.client.send("shutdown_notebook",{keep_in_session:!1},{notebook_id:t.notebook_id},!1)):(e(t.path,{transitioning:!0}),fetch(f(t.path),{method:"GET"}).then((e=>{if(!e.redirected)throw new Error("file not found maybe? try opening the notebook directly")})).catch((o=>{console.error("Failed to start notebook in background"),console.error(o),e(t.path,{transitioning:!1,notebook_id:null})})))}}componentDidMount(){this.componentDidUpdate()}componentDidUpdate(){document.body.classList.toggle("nosessions",!(null==this.state.combined_notebooks||this.state.combined_notebooks.length>0))}render(){let e=null;if(null==this.state.combined_notebooks)e=i.html`<li><em>Loading...</em></li>`;else{const t=this.state.combined_notebooks.map((e=>e.path));e=this.state.combined_notebooks.map((e=>{const o=null!=e.notebook_id;return i.html`<li
                    key=${e.path}
                    class=${l.cl({running:o,recent:!o,transitioning:e.transitioning})}
                >
                    <button onclick=${()=>this.on_session_click(e)} title=${o?"Shut down notebook":"Start notebook in background"}>
                        <span></span>
                    </button>
                    <a
                        href=${o?_(e.notebook_id):f(e.path)}
                        title=${e.path}
                        onClick=${t=>{document.body.classList.add("loading"),this.set_notebook_state(e.path,{transitioning:!0})}}
                        >${((e,t)=>{let o=1;for(const n of t)if(n!==e)for(;u(e,o)===u(n,o);)o++;return u(e,o)})(e.path,t)}</a
                    >
                </li>`}))}const{show_samples:t,Recent:o,Picker:{text:n,placeholder:s}}=this.state.extended_components;return i.html`<p>New session:</p>
            <${h} />
            <ul id="new">
                ${t&&i.html`<li>Open a <a href="sample">sample notebook</a></li>`}
                <li>Create a <a href="new">new notebook</a></li>
                <li>
                    ${n||"Open from file"}:
                    <${a.FilePicker}
                        key=${s}
                        client=${this.client}
                        value=""
                        on_submit=${this.on_open_path}
                        button_label="Open"
                        placeholder=${s??"Enter path or URL..."}
                    />
                </li>
            </ul>
            <br />
            <${o} cl=${l.cl} combined=${this.state.combined_notebooks} client=${this.client} recents=${e} />`}}const g=()=>{const e=localStorage.getItem("recent notebooks");return(null!=e?JSON.parse(e):[]).map((e=>p(e)))};i.render(i.html`<${b} />`,document.querySelector("main"));