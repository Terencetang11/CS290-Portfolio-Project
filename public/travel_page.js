console.log("The content on this page was generated through javascript DOM manipulation!")
console.log("This page features scroll boxes as part of each locations description.")

// create line-break for travel table
var br = document.createElement("br");
var hr = document.createElement("hr");
document.body.appendChild(br)
document.body.appendChild(hr)
document.body.appendChild(br)

// Create 3x3 Table built out like columns
// Create Table Node
var table = document.createElement("table");
table.className = "travel_details"
document.body.appendChild(table);

// Create thead node
var headerNode = document.createElement("thead");
table.appendChild(headerNode);
    
    // Create TR
    var rowNode = document.createElement("tr");
    headerNode.appendChild(rowNode);

        // Create TH nodes
        var newCell = document.createElement("th");
        newCell.className = "travel_location"
        newCell.textContent = "Americas";
        rowNode.appendChild(newCell);
        
        newCell = document.createElement("th");
        newCell.className = "travel_location"
        newCell.textContent = "Asia";
        rowNode.appendChild(newCell);
        
        newCell = document.createElement("th");
        newCell.className = "travel_location"
        newCell.textContent = "Europe";
        rowNode.appendChild(newCell);

// Create tbody node
var bodyNode = document.createElement("tbody");
table.appendChild(bodyNode);
    
    // Create row node for photos
    var rowNode = document.createElement("tr");
    rowNode.id = "photo_row";
    bodyNode.appendChild(rowNode);

        // Create photo node Cells
        var newCell = document.createElement("td");
        newCell.className = "travel_photo";
        rowNode.appendChild(newCell);

            // Americas - New York City
            var photo = document.createElement('img');
            photo.src = "travel_images/brooklyn_nyc.jpg";
            newCell.appendChild(photo);

        newCell = document.createElement("td");
        newCell.className = "travel_photo";
        rowNode.appendChild(newCell);

            // Asia - Hong Kong
            var photo = document.createElement("img");
            photo.src = "travel_images/hong_kong.jpg";
            newCell.appendChild(photo);

        newCell = document.createElement("td");
        newCell.className = "travel_photo";
        rowNode.appendChild(newCell);

            // Europe - Venice, Italy
            var photo = document.createElement("img");
            photo.src = "travel_images/venice_italy.jpg";
            newCell.appendChild(photo);
    

    // Create row node for photos
    
    rowNode = document.createElement("tr");
    rowNode.id = "text_row";
    bodyNode.appendChild(rowNode);

        // Create photo node Cells
        var newCell = document.createElement("td");
        newCell.className = "travel_text";
        rowNode.appendChild(newCell);

            // column content
            var newDiv = document.createElement("div");
            newCell.append(newDiv);

                var h3 = document.createElement("h3")    
                h3.textContent = "New York City:"
                newDiv.append(h3)

                var p = document.createElement("p");
                p.textContent = "New York City has the largest European and non-Hispanic white population of any American city. At 2.7 million in 2012, New York's non-Hispanic white population is larger than the non-Hispanic white populations of Los Angeles (1.1 million), Chicago (865,000), and Houston (550,000) combined."
                newDiv.append(p)

                var p = document.createElement("p");
                p.textContent = "New York City has the largest European and non-Hispanic white population of any American city. At 2.7 million in 2012, New York's non-Hispanic white population is larger than the non-Hispanic white populations of Los Angeles (1.1 million), Chicago (865,000), and Houston (550,000) combined."
                newDiv.append(p)

                var p = document.createElement("p");
                p.textContent = "New York City has the largest European and non-Hispanic white population of any American city. At 2.7 million in 2012, New York's non-Hispanic white population is larger than the non-Hispanic white populations of Los Angeles (1.1 million), Chicago (865,000), and Houston (550,000) combined."
                newDiv.append(p)

        newCell = document.createElement("td");
        newCell.className = "travel_text";
        rowNode.appendChild(newCell);

            // column content
            var newDiv = document.createElement("div");
            newCell.append(newDiv);

                var h3 = document.createElement("h3")    
                h3.textContent = "Hong Kong:"
                newDiv.append(h3)

                var p = document.createElement("p");
                p.textContent = "Hong Kong (/ˌhɒŋˈkɒŋ/ (listen); Chinese: 香港, Cantonese:  in a 1,104-square-kilometre (426 sq mi) territory, Hong Kong is one of the most densely populated places in the world. The simplified name Hong Kong was frequently used by 1810."
                newDiv.append(p)

                var p = document.createElement("p");
                p.textContent = "Hong Kong became a colony of the British Empire after the Qing Empire ceded Hong Kong Island at the end of the First Opium War in 1842. Hong Kong is a highly developed territory and ranks fourth on the UN Human Development Index."
                newDiv.append(p)

                var p = document.createElement("p");
                p.textContent = "Hong Kong International Airport is the territory's primary airport. Over 100 airlines operate flights from the airport, including locally based Cathay Pacific (flag carrier), Hong Kong Airlines, regional carrier Cathay Dragon, low-cost airline HK Express and cargo airline Air Hong Kong."
                newDiv.append(p)


        newCell = document.createElement("td");
        newCell.className = "travel_text";
        rowNode.appendChild(newCell);

            // column content
            var newDiv = document.createElement("div");
            newCell.append(newDiv);

                var h3 = document.createElement("h3")    
                h3.textContent = "City of Venice:"
                newDiv.append(h3)

                var p = document.createElement("p");
                p.textContent = "From the 9th to the 12th century, Venice developed into a city state (an Italian thalassocracy or repubblica marinara; there  were three others:  Genoa, Pisa, and Amalfi). Its own strategic position at the head of the Adriatic made Venetian naval and commercial power almost invulnerable."
                newDiv.append(p)

                var p = document.createElement("p");
                p.textContent = "Venice remained closely associated with Constantinople, being twice granted trading privileges in the Eastern Roman Empire, through the so-called golden bulls or 'chrysobulls', in return for aiding the Eastern Empire to resist Norman and Turkish incursions. In the first chrysobull, Venice acknowledged its homage to the empire; but not in the second, reflecting the decline of Byzantium and the rise of Venice's power."
                newDiv.append(p)

                var p = document.createElement("p");
                p.textContent = "The seizure of Constantinople proved as decisive a factor in ending the Byzantine Empire as the loss of the Anatolian themes, after Manzikert. Although the Byzantines recovered control of the ravaged city a half-century later, the Byzantine Empire was terminally weakened, and existed as a ghost of its old self, until Sultan Mehmet The Conqueror took the city in 1453."
                newDiv.append(p)

// Create line break for second row of locations
document.body.appendChild(br)

// Create Table Node for 2nd table
var table = document.createElement("table");
table.className = "travel_details"
document.body.appendChild(table);

// Create thead node
var headerNode = document.createElement("thead");
table.appendChild(headerNode);


// Create tbody node
var bodyNode = document.createElement("tbody");
table.appendChild(bodyNode);
    
    // Create row node for photos
    var rowNode = document.createElement("tr");
    rowNode.id = "photo_row";
    bodyNode.appendChild(rowNode);

        // Create photo node Cells
        var newCell = document.createElement("td");
        newCell.className = "travel_photo";
        rowNode.appendChild(newCell);

            // Americas - Pike Place, Seattle
            var photo = document.createElement('img');
            photo.src = "travel_images/pike_place.jpg";
            newCell.appendChild(photo);

        newCell = document.createElement("td");
        newCell.className = "travel_photo";
        rowNode.appendChild(newCell);

            // Asia - Poon Hill, Nepal
            var photo = document.createElement("img");
            photo.src = "travel_images/poon_hill_nepal.jpg";
            newCell.appendChild(photo);

        newCell = document.createElement("td");
        newCell.className = "travel_photo";
        rowNode.appendChild(newCell);

            // Europe - Venice, Italy
            var photo = document.createElement("img");
            photo.src = "travel_images/lisbon_portugal.jpg";
            newCell.appendChild(photo);
    

    // Create row node for photos
    
    rowNode = document.createElement("tr");
    rowNode.id = "text_row";
    bodyNode.appendChild(rowNode);

        // Create photo node Cells
        var newCell = document.createElement("td");
        newCell.className = "travel_text";
        rowNode.appendChild(newCell);

            // column content
            var newDiv = document.createElement("div");
            newCell.append(newDiv);

                var h3 = document.createElement("h3")    
                h3.textContent = "Pike Place Market:"
                newDiv.append(h3)

                var p = document.createElement("p");
                p.textContent = "The Pike Place Market is overseen by the Pike Place Market Preservation & Development Authority (PDA), a public development authority established under Washington State law. It is overseen by a 12-member volunteer council. Its members serve four-year terms. Four members are appointed by mayor, four by the current council, and four by the Pike Place Market Constituency. The Market PDA sets the policies by which the Pike Place Market is managed and hires an executive director to carry out those policies."
                newDiv.append(p)

                var p = document.createElement("p");
                p.textContent = "The Market Foundation (established 1982) was founded to support the Market's services for low-income people. The foundation now also supports heritage programs, improvements and repairs to historic buildings, and programs that assist the Market's farmers."
                newDiv.append(p)

        newCell = document.createElement("td");
        newCell.className = "travel_text";
        rowNode.appendChild(newCell);

            // column content
            var newDiv = document.createElement("div");
            newCell.append(newDiv);

                var h3 = document.createElement("h3")    
                h3.textContent = "Poon Hill Nepal:"
                newDiv.append(h3)

                var p = document.createElement("p");
                p.textContent = "The citizens of Nepal are known as Nepali or Nepalese. The Nepali are descendants of three major migrations from India, Tibet and North Burma, and the Chinese province of Yunnan via Assam. Among the earliest inhabitants were the Kirat of the eastern region, Newars of the Kathmandu Valley, aboriginal Tharus of the Terai plains and the Khas Pahari people of the far-western hills. Despite the migration of a significant section of the population to the Terai in recent years, the majority of Nepalese still live in the central highlands, and the northern mountains are sparsely populated."
                newDiv.append(p)

                var p = document.createElement("p");
                p.textContent = "Besides having landlocked, rugged geography, few tangible natural resources and poor infrastructure, the ineffective post-1950 government and the long-running civil war are also factors in stunting the country's economic growth and development."
                newDiv.append(p)

        newCell = document.createElement("td");
        newCell.className = "travel_text";
        rowNode.appendChild(newCell);

            // column content
            var newDiv = document.createElement("div");
            newCell.append(newDiv);

                var h3 = document.createElement("h3")    
                h3.textContent = "Lisbon Portugal:"
                newDiv.append(h3)

                var p = document.createElement("p");
                p.textContent = "Among European capitals, Lisbon ranks among those with the warmest winters and one of the mildest night time temperatures, with an average of 8.3 °C (46.9 °F) in the coldest month, and 18.6 °C (65.5 °F) in the warmest month.  The minimum temperature recorded in Lisbon was −1.2 °C (30 °F) in February 1956 and −1 °C (30 °F) in January 1985. The maximum temperature recorded in Lisbon was 44.0 °C (111.2 °F) on 4 August 2018."
                newDiv.append(p)

                var p = document.createElement("p");
                p.textContent = "Sunshine hours are 2,806 per year, from an average of 4.6 hours of sunshine duration per day in December to an average of 11.4 hours of sunshine duration per day in July. The annual average rainfall is 774 mm (30.5 in), with November being the wettest month."
                newDiv.append(p)

                var p = document.createElement("p");
                p.textContent = "During World War II, Lisbon was one of the very few neutral, open European Atlantic ports, a major gateway for refugees to the U.S. and a haven for spies. More than 100,000 refugees were able to flee Nazi Germany via Lisbon."
                newDiv.append(p)

