import { v4 as uuid } from 'uuid';

const generateJetbrainsPluginXML = ({ themeName }) => {
	return `<idea-plugin>
  <id>com.your.company.unique.plugin.id</id>
  <name>${themeName}</name>
  <version>1.0</version>
  <vendor email="support@yourcompany.com" url="http://www.yourcompany.com">YourCompany</vendor>

  <description><![CDATA[
      Enter short description for your plugin here.<br>
      <em>most HTML tags may be used</em>
    ]]></description>

  <change-notes><![CDATA[
      Add change notes here.<br>
      <em>most HTML tags may be used</em>
    ]]>
  </change-notes>

  <!-- please see http://www.jetbrains.org/intellij/sdk/docs/basics/getting_started/build_number_ranges.html for description -->
  <idea-version since-build="173.0"/>

  <!-- please see http://www.jetbrains.org/intellij/sdk/docs/basics/getting_started/plugin_compatibility.html
       on how to target different products -->
  <depends>com.intellij.modules.platform</depends>

  <extensions defaultExtensionNs="com.intellij">
    <themeProvider id="${uuid()}" path="/${themeName}-dark.theme.json" />
    <themeProvider id="${uuid()}" path="/${themeName}-light.theme.json" />
  </extensions>

  <actions>
    <!-- Add your actions here -->
  </actions>

</idea-plugin>`
}

export default generateJetbrainsPluginXML
