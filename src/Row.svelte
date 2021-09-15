<script>

    export let tool;
    export let state;
    export let link;

    let banner_state = false;

    const bannerStateHandler = () => {
        if(banner_state){
            banner_state = false;
        } else {
            banner_state = true;
        }
    };

    const setBadge = (state) => {
        let badgeStyle = "new badge";
        switch (state) {
            case "Assess":
                badgeStyle = `${badgeStyle} yellow`;
                break;
            case "Trial":
                badgeStyle = `${badgeStyle} blue`;
                break;
            case "Hold":
                badgeStyle = `${badgeStyle} red`;
                break;
            case "Adopt":
                badgeStyle = `${badgeStyle} green`;
                break;
            default:
                badgeStyle = `${badgeStyle} grey`;
                break;
        }
        return badgeStyle;
    }
</script>

<tr>
    <td><button on:click={banner_state()}>{tool}</button></td>
    <td><span class={setBadge(state)} data-badge-caption="{state}"></span></td>
    <td><a href="{link}" target="_blank">{link}</a></td>
</tr>

