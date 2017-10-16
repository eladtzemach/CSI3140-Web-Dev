<?xml version = "1.0" encoding = "UTF-8"?>

<xsl:stylesheet version = "1.0"	xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">

	<xsl:template match = "/">
		<html>
			<head>
				<meta charset = "utf-8"/>
				<title>Question 7</title>
				<link rel = "stylesheet" type = "text/css" 
				href = "A4_Q7_Styles_Safieddine_6911577.css"/>
			</head>
			<body>
				<h1><xsl:value-of select = "product/productName"/> Nutritional Table</h1>
				<table>
					<caption>Per <xsl:value-of select = "product/servingSize"/></caption>
					<tr><th>Amount</th>
					<th>Value</th></tr>
					<xsl:for-each select = "product/nutritionalFact">
					<tr>
						<td><xsl:value-of select = "name"/></td>
						<td><xsl:value-of select = "value"/></td>
					</tr>
					</xsl:for-each>
				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>