// GoHighLevel chat widget: the site's text opt-in for A2P. Add it to every page
// except /contact, which has its own consent form (GHL allows only one opt-in per page).
const ChatWidget: React.FC = () => {
    return (
        <script
            async
            src="https://widgets.leadconnectorhq.com/loader.js"
            data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
            data-widget-id="6acece7a64ad6486480079a3"
            data-source="WEB_USER"
        ></script>
    )
}

export default ChatWidget
